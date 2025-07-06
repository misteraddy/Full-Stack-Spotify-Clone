import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem"; // Make sure this component exists

function DisplayHome() {
  return (
    <>
      <Navbar />

      {/* Featured Charts Section */}
      <div className="mb-4 px-6">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto gap-4">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Today's Biggest Hits Section */}
      <div className="mb-4 px-6">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto gap-4">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
