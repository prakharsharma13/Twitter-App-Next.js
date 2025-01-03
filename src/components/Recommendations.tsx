import Link from "next/link";
import React from "react";
import Image from "./Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* USER CARD  */}
      <div className="flex justify-between items-center">
        {/* IMAGE AND USER INFO  */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="default-image.jpg"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-md font-black">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>
        {/* FOLLOW BUTTON  */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <div className="flex justify-between items-center">
        {/* IMAGE AND USER INFO  */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="default-image.jpg"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-md font-black">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>
        {/* FOLLOW BUTTON  */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <div className="flex justify-between items-center">
        {/* IMAGE AND USER INFO  */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="default-image.jpg"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-md font-black">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>
        {/* FOLLOW BUTTON  */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show more
      </Link>
    </div>
  );
};

export default Recommendations;
