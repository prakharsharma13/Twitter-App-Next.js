import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div>
      {/* PROFILE TITLE  */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md z-10 p-4 bg-[#00000004]">
        <Link href="/">
          <Image path="public/icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Prakhar Sharma</h1>
      </div>
      {/* INFO  */}
      <div>
        {/* COVER & AVATAR CONTAINER  */}
        <div className="relative w-full">
          {/* COVER  */}
          <div className="w-full aspect-[3/1] relative">
            <Image
              path="test-upload_ixqwXYHIA.png"
              alt="image"
              w={600}
              h={200}
            />
          </div>
          {/* AVATAR  */}
          <div
            className="w-1/5 aspect-square rounded-full overflow-hidden border-4 bg-gray-300 absolute left-4 -translate-y-1/2
          "
          >
            <Image
              path="public/general/avatar.JPG"
              alt="image"
              w={100}
              h={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* USER INFO  */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE  */}
          <div>
            <h1 className="text-2xl font-bold">Prakhar Sharma</h1>
            <span className="text-textGray text-sm">@PrakharSharmaDev</span>
          </div>
          <p>Prakhar Sharma's project</p>
          {/* JOB & LOCATION & DATE  */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                path="public/icons/userLocation.svg"
                alt=""
                w={20}
                h={20}
              />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2">
              <Image path="public/icons/date.svg" alt="" w={20} h={20} />
              <span>Joined May 2021</span>
            </div>
          </div>

          {/* FOLLOWERS & FOLLOWING  */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 ">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2 ">
              <span className="font-bold">1</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* FEED  */}
      <Feed />
    </div>
  );
};

export default UserPage;
