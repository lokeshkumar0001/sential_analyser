"use client"
import Form from "@/components/Form";
import CommentsPanel from  "@/components/CommentsPanel";

import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentinalData, setSentinalData] = useState<string[]>([]);

  return (
    <main className="flex flex-col min-h-screen  lg:flex-row">
      <div className=" w-full lg:w-2/5  " >
        <h1 className="my-16 mx-auto text-3xl md:text-5xl  font-semibold text-center w-96  h-auto ">Sentiment Analyser</h1>
        <div>
        <Form
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setSentinalData={setSentinalData}
        />
        </div>
      </div>

      <div className="content flex-1 lg:w-3/5">
        <CommentsPanel sentinalData={sentinalData}  />
      </div>
    </main>
  );
}
