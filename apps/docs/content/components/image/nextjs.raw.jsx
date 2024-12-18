import {Image} from "@landing-ui/react";
import NextImage from "next/image";

export default function App() {
  return (
    <Image
      alt="NextUI hero Image"
      as={NextImage}
      height={200}
      src="https://landing-ui.vercel.app/images/hero-card-complete.jpeg"
      width={300}
    />
  );
}
