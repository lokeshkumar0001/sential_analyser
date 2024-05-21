"use client"
import Form from "@/components/Form";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentinalData, setSentinalData] = useState<string[]>([]);

  return (
    <main className="flex min-h-screen bg-yellow-100">
      <div className="bg-blue-100">
        <h1>sentianl</h1>
        <div>

        <Form
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setSentinalData={setSentinalData}
        />
        </div>
      </div>

      <div className="content bg-red-100 flex-1">No comments</div>
    </main>
  );
}
