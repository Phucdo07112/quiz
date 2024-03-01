"use client";

import { useEffect, useState } from "react";
import useSound from "use-sound";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import audios from "@/audio/index";
type Props = {};

const Music = (props: Props) => {
  const [volume, setVolume] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, sound }] = useSound(audios.src, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  });
  useEffect(() => {
    if (!isPlaying) {
      play();
    }
  }, [isPlaying]);

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
    toggleMute();
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  return (
    <div className="bg-white p-2 rounded-full " onClick={handlePlay}>
      {volume === 1 ? (
        <div>
          <MdMusicNote size={20} />
        </div>
      ) : (
        <div>
          <MdMusicOff size={20} />
        </div>
      )}
    </div>
  );
};

export default Music;
