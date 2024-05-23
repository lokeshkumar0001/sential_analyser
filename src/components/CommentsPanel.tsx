import React from 'react'

interface CommentsPanelProps {
  sentinalData: [string, string][];
}
export default function CommentsPanel({sentinalData}:CommentsPanelProps) {
  return (
    <div className='bg-slate-100 w-full rounded-3xl mx-12  p-8  shadow-lg shadow-slate-500' >
      <div className='flex h-8  mb-6  gap-[10px]  ' > 
      <p className='w-4/5 text-center  rounded-md font-bold bg-[#d2e1fc]' >Comments</p>
      <p className='w-1/5 text-center font-bold rounded-md bg-[#d2e1fc]' >Sentiment</p>
      </div>
      <div className='h-[480px] overflow-y-auto'>
        {sentinalData ? (
          <div className='flex flex-col gap-12 '>
            {sentinalData.map((comment,idx)=>{
              return (
                <div key={idx} className='flex gap-[10px]   '>
                  <p className='w-4/5'>{comment[0]}</p>
                  <p className='w-1/5 text-center text-blue-800 font-normal'>{comment[1]}</p>
                </div>
              )
            })}
          </div>
        ) : (<p>no comment</p>)}
        </div>
    </div>
  )
}
