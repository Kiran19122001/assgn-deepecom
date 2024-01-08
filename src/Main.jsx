import React from 'react'
import HorizontalBarChartComponent from "./HorizontalBarChartComponent.jsx"
import { MdOutlineTurnLeft } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { FaFacebookMessenger, FaTwitter, FaMicrophone,FaLocationArrow } from "react-icons/fa";
import { TbBrandAsana } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import './App.css'
import gmaps from "./gmaps.png"


const dataList = [{ task: "Coffee?", sender: "Marisa Lu", key: 1 }, { task: "Feedback", sender: "Lindsey Weiss", key: 2 }, { task: "Post-grad plans", sender:"Evelyn Ma" ,key:3} ,{task: "Launch plan",sender:"Dennis jin"  ,key:4}]
const messgList = [{ name: "Victoria Wang", cat: "mes" ,key:1}, { name: "Advait Kalakkad", cat: "mes" ,key:2}, { name: "Danny Trinh", cat: "twt",key:3 }]
const buttons = [{ id: 1, name: "Reply", key:1}, { id: 1, name: "Forward", key:2 },{id:1,name:"Delete", key:3 },{id:2,name:"Create Event", key:4},{id:2,name:"Edit Event", key:5},{id:2,name:"Full Calender", key:6},{id:2,name:"Dismiss", key:7},{id:3,name:"See details", key:8},{id:3,name:"Find more cafes nearby", key:9}]

function Main() {
  return (
      <div className="main-content">
            
          <div className='section-1'>
            
          <div className="d-flex">
              <MdOutlineTurnLeft color='grey'/>
              <h1 className="head">Review Inbox</h1>
          </div>
              <div >
                  <div className='d-flex justify-content-between align-items-center task-add' >
                       <p><GoPlus size={25}/></p>
              <p>New flow</p>
                 </div>
              <ul className="list-unstyled">{dataList.map((each,index) => (
                  <li key={each.key } className={`${index===0 && "first-cont"}  d-flex align-items-center`}>
                     <p className='mail'> <IoMdMail/></p>
                      <p className={`${index === 0 && "first"}`}>{each.task} .</p>
                      <p className='sender-name'>{ each.sender}</p>
                  </li>
              ))}</ul>
              <ul className="list-unstyled sec-2">{messgList.map(each => (
                  <li key={ each.key} className='d-flex align-items-center'>
                      {each.cat==="mes"?<p className='plat-clr'><FaFacebookMessenger/></p>:<p className='plat-clr'><FaTwitter/></p>}
                      <p >{each.name }</p>
                  </li>
              ))}</ul>
          </div>
          </div>
          <div className='cards'>
              <div className='card-1'>
              <div className='d-flex justify-content-between block-top'>
                  <div className='d-flex'>
                  <p className='mail-ad-t'><IoMdMail /></p>
                  <p className='card-coffe'>Coffee? .</p>
                  <p className='sender-name'>Mail from Marisa Lu</p>
              </div>
              <div className='sender-name'>
                  <FaMicrophone/>
              </div>
              </div>
              <div className='card-inside-cof'>
                  <div>
                  <h2>Marisa Lu</h2>
                  <h1>Coffee?</h1>
                  </div>
                 
                  <p className='ad-js-nw'>Just Now</p>
                   <p className='font-mail'>Hey Jason,</p>
              <p className='font-mail'>Was wondering if you'd be interested in meeting my team ai phliz coffee at 11 AM today.No pressure if you can't make it,although i think you guys would really get along!</p>
              <p className='font-mail'>Marisa</p>
              <ul className='buttons-container'>
                  {buttons.map(each => (
                      each.id === 1 && <button type="button" className='buttons' key={ each.key}>{ each.name}</button>
                  ))}
              </ul>
              <p className='sender-name cone'><TbBrandAsana/>More actions</p>
              </div>
              </div>
              <div className="card-2">
                   <HorizontalBarChartComponent FaMicrophone={FaMicrophone} buttons={ buttons} TbBrandAsana={TbBrandAsana} />
              </div>
             
          <div className='card-3'>
              <div className='d-flex justify-content-between block-top'>
                      <div className='d-flex justify-content-between align-items-center'>
                          <p className='mail-ad-t'> <FaLocationDot /></p>
                  <p className='card-coffe'>Philz Coffee . </p>
                      <p>Location</p>
                  </div>
                  <div>
                 <p className='sender-name'> <FaMicrophone/></p>
              </div>
              </div>
              
                  <div>
                      <img src={gmaps} alt="location" className='gmaps-img'/>
              </div>
              <div className='inisid-card-3'>
                   <div>
                 
                  <h2>Philz Coffee</h2>
                  <p className='card3-b-t'>Custom-blended java in a casual setting.</p>
                  <p className='sender-name cthre-ad-p'>20686 Stevens Creek Blvd CUpertino,CA 95014</p> 
              </div>
                  <div className='d-flex'>
                      <button type="button" className='dir-btn'>
                          <div className='d-flex align-items-center'>
                              <p> <FaLocationArrow /></p>
                              <p className='get-dir'>Get directions</p>
                          </div>
                  <p className='get-loc'>Requires your location</p>
              </button>
              <ul className='buttons-cont'>
                  {buttons.map(each => (
                      each.id === 3 && <button type="button" className='buttons cthree' key={ each.key}>{ each.name}</button>
                  ))}   
              </ul>
              </div>
               <p className='sender-name'
               ><TbBrandAsana/>More actions</p>
             </div>
          </div>
          </div>
    </div>
  )
}

export default Main