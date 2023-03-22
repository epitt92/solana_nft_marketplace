import React from 'react'

export default function SocialProfile() {
  return (
    <div className="flex overflow-hidden px-5 pb-0 flex-col w-full items-center  shadow-md">
      <div className="flex items-center w-full  ">
        <img
          src="https://pbs.twimg.com/profile_images/1506305983806550017/aGiQFy4f_400x400.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-700"
        />
        <div className="flex space-x-2 ml-3">
          <p className="text-sm font-bold">@username</p>
        </div>
      </div>
    </div>
  )
}
