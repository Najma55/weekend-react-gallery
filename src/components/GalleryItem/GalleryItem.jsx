import React, { useState } from "react";

export default function GalleryItem({ item }) {
  const [showDescription, setShowDescription] = useState(false);
  const toggleImage=()=>{
    setShowDescription(!showDescription)
  }
  const likeImage=()=> {
    console.log('I have been clicked');
  }
  return (
    <div className="item">
      <div className="img" onClick={()=>toggleImage()}>
        {showDescription ? (
          <p>{item.decription}</p>
        ) : (
          <img src={item.path} alt="" />
        )}
      </div>
      <button onClick={()=>likeImage()}>I love This</button>
      <p>{item.likes} people like this</p>
    </div>
  );
}
