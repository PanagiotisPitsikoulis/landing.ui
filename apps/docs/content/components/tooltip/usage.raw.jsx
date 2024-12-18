import {Tooltip, Button} from "@landing-ui/react";

export default function App() {
  return (
    <Tooltip content="I am a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
