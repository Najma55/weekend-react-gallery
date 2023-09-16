import React, { useEffect, useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import axios from "axios";

export default function GalleryList() {
  const [gallery, setGallery] = useState([]);
  // Fetch Gallery list from API ---- save the fetched data to the gallery state
  const getItemsFromAPI = async () => {
    const response = await axios.get("http://localhost:5000/gallery");
    console.log(response.data);
    setGallery(response.data)
  };
  useEffect(() => {
    getItemsFromAPI();
  }, []);
  return (
    <div className="items">
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} refreshList={()=>getItemsFromAPI()}/>
      ))}
    </div>
  );
}
