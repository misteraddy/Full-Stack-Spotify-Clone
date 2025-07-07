import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { assets, songsData, albumsData } from "../assets/assets";

function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData.find((album) => album.id === parseInt(id));

  if (!albumData) {
    return <p className="text-white px-6 mt-10">Album not found.</p>;
  }

  return (
    <>
      <Navbar />

      {/* Album Banner Section */}
      <div
        className="mt-10 px-6 py-6 flex gap-8 flex-col md:flex-row md:items-end"
        style={{ backgroundColor: albumData.bgColor }}
      >
        <img className="w-48 rounded" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col">
          <p className="uppercase text-sm">Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl text-white">{albumData.name}</h2>
          <h4 className="text-white">{albumData.desc}</h4>
          <p className="mt-1 text-sm text-[#d1d1d1]">
            <img className="inline-block w-5 mr-1" src={assets.spotify_logo} alt="Spotify Logo" />
            <b>Spotify</b> • 1,323,154 likes • <b>50 songs</b>, about 2 hr 30 min
          </p>
        </div>
      </div>

      {/* Songs List */}
      <div className="mt-10 px-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 mb-4 p-2 text-[#a7a7a7] text-sm">
          <p className="hidden sm:block">#</p>
          <p className="col-span-2 sm:col-span-2">Title</p>
          <p className="hidden sm:block">Date Added</p>
          <img className="m-auto w-4" src={assets.clock_icon} alt="Duration" />
        </div>
        <hr className="border-[#2a2a2a]" />

        {songsData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] rounded"
          >
            <b className="hidden sm:block">{index + 1}</b>
            <div className="col-span-2 flex items-center gap-3">
              <img className="w-10 rounded" src={item.image} alt={item.name} />
              <div>
                <p className="text-white">{item.name}</p>
                <p className="text-[13px] text-[#a7a7a7]">{albumData.name}</p>
              </div>
            </div>
            <p className="hidden sm:block text-[15px]">5 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayAlbum;
