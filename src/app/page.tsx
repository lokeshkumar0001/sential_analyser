"use client"
import Form from "@/components/Form";
import CommentsPanel from  "@/components/CommentsPanel";
import Image from 'next/image'
import Logo from "../Images/analyser logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [sentinalData, setSentinalData] = useState<string[]>([]);

  return (

    <div className="h-screen">
      {/* <nav className="bg-white text-gray-600 w-full  border-b-2 ">
                <div className="flex justify-between items-center mx-auto">
                    <div className="flex items-center  w-full">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="w-48 h-16 ml-10 my-2 mr-10"
                        />
                        <div>
                            <ul className=" flex space-x-6">
                                <li>
                                    <a href=" " className="hover:text-gray-400">
                                        Sentiment Analyser
                                    </a>
                                </li>
                                <li>
                                    <a href=" " className="hover:text-gray-400">
                                        Topology Analyser
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div>
                          <AccountCircleIcon className="w-12 h-12 mr-12"/>
                    </div>
  
                </div>
               
            </nav> */}

    <main className="flex flex-col  h-full  lg:flex-row " style={{ backgroundImage: 'linear-gradient(to right , #8c52ff, #5ce1e6)' }}>
      <div className=" w-full lg:w-2/5  " >
        <h1 className="my-16 mx-auto text-3xl md:text-6xl  font-bold text-center w-96  h-auto "
         >Sentiment Analyser</h1>
        <div>
        <Form
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setSentinalData={setSentinalData}
        />
        </div>
      </div>

      <div className="content flex-1 flex items-center justify-center lg:w-3/5">
        <CommentsPanel sentinalData={sentinalData}  />
      </div>
    </main>
    </div>
  );
}
