import React from 'react'

interface CommentsPanelProps {
  sentinalData: [string, string][];
}
export default function CommentsPanel({sentinalData}:CommentsPanelProps) {
  return (
    <div className='bg-slate-100 w-auto rounded-3xl mx-12 my-12 p-8  shadow-lg shadow-slate-500 overflow-x-auto' style={{height:"660px"}}>
        {sentinalData ? (
          <div className='flex flex-col gap-12 '>
            {sentinalData.map((comment,idx)=>{
              return (
                <div key={idx} className='flex gap-[10px] flex  '>
                  <p className='w-4/5'>{comment[0]}</p>
                  <p className='w-1/5 text-center text-blue-800 font-normal'>{comment[1]}</p>
                </div>
              )
            })}
          </div>
        ) : (<p>no comment</p>)}
    </div>
  )
}
