import React, { useState } from "react";
import {BASE_URL} from '../config/config'

interface FormProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setSentinalData: (data: string[]) => void;
}

export default function Form({ isLoading,setIsLoading,setSentinalData }: FormProps) {

  const [error,setError] = useState(null);

  async function handleFormSubmit(event:any){
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/?video_id=vwgihljM2e4`)
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
    
    <form  className=" flex flex-col h-60 md:h-full rounded-3xl mx-12 lg:mx-8 xl:mx-16 py-8 md:py-20 bg-slate-100 text-md md:text-xl font-normal shadow-slate-500 shadow-lg" onSubmit={handleFormSubmit} >
      <label className="w-80 md:w-96 lg:w-80 xl:w-96 mx-auto text-start  " htmlFor="video_url">Video Id</label>
      <input className=" w-80 md:w-96 lg:w-80 xl:w-96 h-12 mx-auto bg-zinc-400 rounded-xl" type="text" required id="video_url" name="video_url" />
      {error && (<p>{error}</p>)}
      <button className="w-64 h-16 mx-auto text-center my-8 rounded-xl bg-zinc-400  " type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Sentiment"}
      </button>
    </form>
   
  );
}
