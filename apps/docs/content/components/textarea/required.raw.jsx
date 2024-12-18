import {Textarea} from "@landing-ui/react";

export default function App() {
  return (
    <Textarea
      isRequired
      className="max-w-xs"
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
    />
  );
}
