"use client";
import { IKImage } from "imagekitio-next";
import { transform } from "next/dist/build/swc/generated-native";

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, alt, w, h, className, tr }: ImageType) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      alt={alt}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      lqip={{ active: true, quality: 20 }}
      className={className}
    />
  );
};

export default Image;
