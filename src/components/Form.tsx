import React, { useState } from "react";
import {BASE_URL} from '../config/config'


interface FormProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setSentinalData: (data: string[]) => void;
}

export default function Form({ isLoading,setIsLoading,setSentinalData }: FormProps) {

  const [error,setError] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  
  
  async function handleFormSubmit(event:any){
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
      setError("Please enter a valid URL");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/?video_id=${videoId}`)
      const data = await response.json();
      console.log(data) 
      setSentinalData(data)
      
    } catch (error) {
      console.log(error)
      setError(error)
    }finally{
      setIsLoading(false);
    }
  }

  return (
    
    <form  className=" flex flex-col h-60 md:h-full rounded-3xl mx-12 lg:mx-8 xl:mx-16 py-8 md:py-16 bg-slate-100 text-md md:text-xl font-normal shadow-slate-500 shadow-lg" onSubmit={handleFormSubmit} >
      <label className="w-80 md:w-96 lg:w-80 xl:w-96 mx-auto text-start  " htmlFor="video_url">Video URL</label>
      {error && <p className="text-red-500 text-sm py-2 w-80 md:w-96 lg:w-80 xl:w-96 mx-auto">{error}</p>}
      <input className=" w-80 md:w-96 lg:w-80 xl:w-96 h-12 mx-auto  rounded-xl bg-[#d2e1fc]" type="text" required id="video_url" name="video_url"  onChange={(e) => setVideoUrl(e.target.value)}/>
      <button className="w-64 h-16 mx-auto text-center my-8 rounded-xl  " type="submit" disabled={isLoading}
      style={{ backgroundImage: 'linear-gradient(to right , #8c52ff, #5ce1e6)' }}>
      
        {isLoading ? "Loading..." : "Get Sentiment"}
      </button>
    </form>
   
  );
}

function extractVideoId(url: string): string | null {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|user\/(?:[^\/\n\s]+\/)+)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}