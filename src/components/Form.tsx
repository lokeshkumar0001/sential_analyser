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
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="video_url">Video Id</label>
      <input type="text" required id="video_url" name="video_url" />
      {error && (<p>{error}</p>)}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Sentinel"}
      </button>
    </form>
  );
}
