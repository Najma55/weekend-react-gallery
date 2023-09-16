import React, { useState } from "react";
import axios from "axios";

export default function GalleryItem({ item, refreshList}) {
  const [showDescription, setShowDescription] = useState(false);
  const toggleImage = () => {
    setShowDescription(!showDescription);
  };
  const likeImage = async (id) => {
    console.log("I have been clicked");
    const response = await axios.put(
      "http://localhost:5000/gallery/like/" + id
    );
    console.log(response.data);
    refreshList()
  };
  return (
    <div className="item">
      <div className="img" onClick={() => toggleImage()}>
        {showDescription ? (
          <p>{item.description}</p>
        ) : (
          <img src={item.path} alt="" />
        )}
      </div>
      <button onClick={() => likeImage(item.id)}>I love This</button>
      { item.likes >0 ? 
      <p>{item.likes} people like this</p> :
      <p>No People Liked This </p> }
    </div>
  );
}
