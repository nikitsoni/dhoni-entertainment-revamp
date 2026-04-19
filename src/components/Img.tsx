import NextImage, { ImageProps } from "next/image";

// Hardcoded to match basePath in next.config.ts — needed because next/image
// with unoptimized:true doesn't prepend basePath in static exports.
const BASE =
  process.env.NODE_ENV === "production"
    ? "/dhoni-entertainment-revamp"
    : "";

export default function Img({ src, ...props }: ImageProps) {
  const resolved =
    typeof src === "string" && src.startsWith("/")
      ? `${BASE}${src}`
      : src;
  return <NextImage src={resolved} {...props} />;
}
