import React from 'react'

interface CommentsPanelProps {
  sentinalData: [string, string][];
}
export default function CommentsPanel({sentinalData}:CommentsPanelProps) {
  return (
    <div>
        {sentinalData ? (
          <div className='flex flex-col gap-12 overflow-auto'>
            {sentinalData.map((comment,idx)=>{
              return (
                <div key={idx} className='flex gap-[10px]'>
                  <p>{comment[0]}</p>
                  <p>{comment[1]}</p>
                </div>
              )
            })}
          </div>
        ) : (<p>no comment</p>)}
    </div>
  )
}
