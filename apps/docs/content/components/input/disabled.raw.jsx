import {Input} from "@landing-ui/react";

export default function App() {
  return (
    <Input
      isDisabled
      className="max-w-xs"
      defaultValue="junior@nextui.org"
      label="Email"
      type="email"
    />
  );
}
