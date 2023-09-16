import React, { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList() {
  const [gallery, setGallery] = useState([
    { id: 0, description: "great", likes: 3, path: "images/cat.jpeg" },
    { id: 1, description: "great", likes: 3, path: "images/cat.jpeg" },
    { id: 2, description: "great", likes: 3, path: "images/cat.jpeg" },
    { id: 3, description: "great", likes: 3, path: "images/cat.jpeg" },
    { id: 4, description: "great", likes: 3, path: "images/cat.jpeg" },
  ]);
  return (
    <div className="items">
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item}/>
      ))}
    </div>
  );
}
