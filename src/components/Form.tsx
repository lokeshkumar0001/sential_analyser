import React from "react";
import { getVideoComments } from "../actions/form";

const initalState = {
  message: null,
  error: null,
};

interface FormProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setSentinalData: (data: string[]) => void;
}

export default function Form({
  isLoading,
}: FormProps) {
  return (
    <form
      
    >
      <label htmlFor="video_url">Video Id</label>
      <input type="text" required id="video_url" name="video_url" />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Sentinel"}
      </button>
    </form>
  );
}
