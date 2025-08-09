"use client";
import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";
import {
	IoMdPause,
	IoMdPlay,
	IoMdSkipBackward,
	IoMdSkipForward,
	IoMdVolumeHigh,
	IoMdVolumeLow,
	IoMdVolumeMute,
	IoMdVolumeOff,
} from "react-icons/io";
import { LuRepeat1 } from "react-icons/lu";
import { MdOutlineQueueMusic } from "react-icons/md";

const MusicPlayer = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(50);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	// const [isMuted,setIsMuted] = useState(false);
	const [previousVolume, setPreviousVolume] = useState(0);
	const togglePlayButton = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;
		const updateTime = () => {
			setCurrentTime(audio.currentTime);
			setDuration(audio.duration | 0);
		};
		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", updateTime);
	}, []);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume / 100;
		}
	}, [volume]);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, "0");

		return `${minutes}:${seconds}`;
	};
	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTime = parseFloat(e.target.value);

		if (audioRef.current) {
			audioRef.current.currentTime = newTime;
			setCurrentTime(newTime);
		}
	};

	const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseInt(e.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume / 100;
		}
	};
	const toggleMute = () => {
		if (volume === 0) {
			setVolume(previousVolume);
			if (audioRef.current) {
				audioRef.current.volume = previousVolume / 100;
			}
		}
		else {

			setPreviousVolume(volume)
			setVolume(0)
			if(audioRef.current){
				audioRef.current.volume = 0;
			}
		}
	};
	return (
		<div className="fixed bottom-0 left-0 w-full bg-black text-white px-4 py-3 shadow-md z-50">
			<audio src="/audio/audio1.mp3"  ref={audioRef}></audio>
			<div className="max-w-7xl w-[95%] mx-auto flex items-center justify-between">
				<div className="flex gap-4 items-center">
					<Image
						src={"/images/cover-2.jpeg"}
						alt="cover-image"
						width={100}
						height={100}
						className="w-13 h-13 object-cover rounded-md"
					/>
					<div className="text-sm">
						<p className="text-white">Bicycle</p>
						<p className="text-secondary-text font-normal">
							Emanuel
						</p>
					</div>
				</div>
				{/* song controls */}
				<div className="max-w-[400px] w-full flex items-center flex-col gap-3">
					<div className="flex gap-4 ">
						<button className="text-xl text-secondary-text">
							<IoMdSkipBackward />
						</button>
						<button
							onClick={togglePlayButton}
							className="bg-white text-xl text-black w-10 h-10 rounded-full grid place-items-center"
						>
							{isPlaying ? <IoMdPause /> : <IoMdPlay />}
						</button>
						<button className="text-xl text-secondary-text">
							<IoMdSkipForward />
						</button>
					</div>
					<div className="w-full flex justify-center items-center gap-2 ">
						<span className="text-secondary-text font-normal text-sm">
							{formatTime(currentTime)}
						</span>
						<div className="w-full">
							<input
								onChange={handleSeek}
								value={currentTime}
								type="range"
								min={"0"}
								max={duration}
								className="w-full outline-none h-1 bg-zinc-700 rounded-md appearance-none accent-white"
							/>
						</div>
						<span className="text-secondary-text font-normal text-sm">
							{formatTime(duration)}
						</span>
					</div>
				</div>
				{/* Volume control */}
				<div className="flex items-center gap-2">
					<button className="text-secondary-text text-xl cursor-pointer">
						<LuRepeat1 />
					</button>
					<button className="text-secondary-text text-xl cursor-pointer">
						<MdOutlineQueueMusic />
					</button>
					<button onClick={toggleMute} className="text-secondary-text text-xl cursor-pointer">
						{audioRef.current?.volume  === 0 ? <IoMdVolumeOff /> : <IoMdVolumeHigh/>}
						
					</button>
					<input
						onChange={handleVolume}
						value={volume}
						type="range"
						min={"0"}
						max={"100"}
						className="w-[100px] h-1 outline-none bg-zinc-700 accent-white appearance-none"
					/>
				</div>
			</div>
		</div>
	);
};

export default MusicPlayer;
