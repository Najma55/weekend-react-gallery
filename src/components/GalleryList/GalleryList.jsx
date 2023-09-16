import React, { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList() {
  const [gallery, setGallery] = useState([]);
  return (
    <div className="items">
      {gallery.map((item) => (
       <GalleryItem />
      ))}
    </div>
  );
}
