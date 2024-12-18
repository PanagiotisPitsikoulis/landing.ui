import {Image} from "@landing-ui/react";

export default function App() {
  return (
    <Image
      isBlurred
      alt="NextUI Album Cover"
      className="m-5"
      src="https://landing-ui.vercel.app/images/album-cover.png"
      width={240}
    />
  );
}
