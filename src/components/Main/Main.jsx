/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../../context/Context";
import './Main.css';
import Sidebar from "../Sidebar/Sidebar";
import { assets } from "../../assets/assets";
const Main=()=>{
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input,setRecentPrompt}=useContext(Context)
    const loadPrompt =async (prompt)=>{
        setInput(prompt)
        await onSent(prompt)
    }
    return(
        <div className="main">
            <div className="nav">
                <p>AI ChatBot</p>
                <img src={assets.user_icon} alt="" />
            </div>  
            <div className="main-container">
                {!showResult?<><div className="greet">
                    <p><span>Hello, Aryan</span></p>
                    <p>How Can I help you today?</p>
                </div>
                <div className="cards">
                    <div onClick={()=>loadPrompt("Suggest Beautiful places to see on an upcomming road trip")} className="card">
                        <p>Suggest Beautiful places to see on an upcomming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div onClick={()=>loadPrompt("Briefly summarize this concept: Urban planning")} className="card">
                        <p>Briefly summarize this concept: Urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div onClick={()=>loadPrompt("Brainstrom team bonding activities for our work retreat")} className="card">
                        <p>Brainstrom team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div onClick={()=>loadPrompt("improve the readability of the following code")} className="card">
                        <p>improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                :<div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?<div className="loader">
                            <hr />
                            <hr />
                            <hr />                        
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    </div>
                </div>
                
                }
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)}value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            {/* <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" /> */}
                            <img onClick={()=>onSent()}src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">Given AI Model might generate inaccurate information including about people, so double check its responses. Your privacy and our Apps</p>
                </div>
            </div>
        </div>
    )
}
export default Main