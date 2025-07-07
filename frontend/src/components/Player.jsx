import React from "react";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="h-[10%] bg-black text-white px-4 flex flex-col justify-center">
      {/* Top Section - Song Info */}
      <div className="flex justify-between items-center w-full">
        <div className="hidden lg:flex items-center gap-4">
          <img className="w-12" src={songsData[0].image} alt="Song" />
          <div>
            <p className="font-semibold">{songsData[0].name}</p>
            <p className="text-sm opacity-60">{songsData[0].desc.slice(0, 12)}</p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4">
            <img className="w-6 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
            <img className="w-6 cursor-pointer" src={assets.prev_icon} alt="Previous" />
            <img className="w-6 cursor-pointer" src={assets.plays_icon} alt="Play" />
            <img className="w-6 cursor-pointer" src={assets.next_icon} alt="Next" />
            <img className="w-6 cursor-pointer" src={assets.loop_icon} alt="Loop" />
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-5 mt-2 w-full max-w-[500px]">
            <p>1:06</p>
            <div className="w-full bg-gray-300 rounded-full h-1 cursor-pointer relative">
              <div className="bg-green-800 h-1 rounded-full w-1/3"></div>
            </div>
            <p>3:20</p>
          </div>
        </div>

        {/* Right Section - Utilities */}
        <div className="hidden lg:flex items-center gap-2 opacity-75">
          <img className="w-4" src={assets.mic_icon} alt="Mic" />
          <img className="w-4" src={assets.queue_icon} alt="Queue" />
          <img className="w-4" src={assets.speaker_icon} alt="Speaker" />
          <img className="w-4" src={assets.volume_icon} alt="Volume" />
          <img className="w-4" src={assets.mini_player_icon} alt="Mini Player" />
          <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
        </div>
      </div>
    </div>
  );
};

export default Player;
