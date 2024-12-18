import {TimeInput} from "@landing-ui/react";
import {Time} from "@internationalized/date";

export default function App() {
  return <TimeInput defaultValue={new Time(11, 45)} label={null} />;
}
