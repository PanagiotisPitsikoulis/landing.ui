import {Image} from "@landing-ui/react";

export default function App() {
  return (
    <Image
      alt="NextUI Image with fallback"
      fallbackSrc="https://via.placeholder.com/300x200"
      height={200}
      src="https://app.requestly.io/delay/1000/https://landing-ui.vercel.app/images/fruit-4.jpeg"
      width={300}
    />
  );
}
