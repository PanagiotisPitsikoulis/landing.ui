import {CircularProgress} from "@landing-ui/react";

export default function App() {
  return (
    <CircularProgress
      color="success"
      formatOptions={{style: "unit", unit: "kilometer"}}
      label="Speed"
      showValueLabel={true}
      size="lg"
      value={70}
    />
  );
}
