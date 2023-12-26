import React, { useState } from 'react'
import './card.css'
import Heart from "../../img/heart.png";
import HeartFilled from "../../img/heartfilled.png";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Info from "../../img/info.png";




const Card = ({post,socket,user}) => {
  const [liked,setLiked]=useState(false);
  const handleNotification=(type)=>{
    setLiked(true);
    socket.emit("sendNotification",{
      senderName:user,
      receiverName:post.username,
      type,
    })
  }
  return (
    <div className='card'>
      <div className="info">
        <img src={post.userImg} alt=""  className='userImg' />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ?(<img src={HeartFilled} alt="" className="cardIcon"  />):(
       <img src={Heart} alt="" className="cardIcon" onClick={()=>handleNotification(1)} />
        )}
        
        <img src={Comment} alt="" className="cardIcon"  onClick={()=>handleNotification(2)}/>
        <img src={Share} alt="" className="cardIcon"   onClick={()=>handleNotification(3)}/>
        <img src={Info} alt="" className="cardIcon" />
      </div>
    </div>
  )
}

export default Card;
