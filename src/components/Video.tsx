"use client";
import React from "react";
import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoTypes = {
  path: string;
  className?: string;
};

const Video = ({ path, className }: VideoTypes) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      transformation={[
        { width: "1920", height: "1080", q: "90" },
        { raw: "l-text,i-Prakhar,fs-100,co-white,l-end" },
      ]}
      controls
    />
  );
};

export default Video;
