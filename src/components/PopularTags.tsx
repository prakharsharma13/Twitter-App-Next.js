import React from "react";
import Image from "./Image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div
      className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4
    "
    >
      <h1 className="text-xl font-bold text-textGrayLight">
        What's Happening?
      </h1>
      {/* TREND EVENTS  */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="test-upload_zN5waHgMP.png"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Dog's are the best pets
          </h2>
          <span className="text-sm text-textGray">Last night</span>
        </div>
      </div>
      {/* TOPICS  */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray font-semibold text-sm">
            Nature * Trending
          </span>
          <Image path="test-upload_WdSSMF3zA.png" alt="" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Open AI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* TOPICS  */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray font-semibold text-sm">
            Nature * Trending
          </span>
          <Image path="test-upload_WdSSMF3zA.png" alt="" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Open AI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* TOPICS  */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray font-semibold text-sm">
            Nature * Trending
          </span>
          <Image path="test-upload_WdSSMF3zA.png" alt="" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Open AI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* TOPICS  */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray font-semibold text-sm">
            Nature * Trending
          </span>
          <Image path="test-upload_WdSSMF3zA.png" alt="" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Open AI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      <Link href="/" className="text-iconBlue">
        Show more
      </Link>
    </div>
  );
};

export default PopularTags;
