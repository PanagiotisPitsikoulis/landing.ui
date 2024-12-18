import {TimeInput} from "@landing-ui/react";
import {Time} from "@internationalized/date";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <TimeInput label="Event Time" />
      <TimeInput defaultValue={new Time(11, 45)} label="Event Time" />
    </div>
  );
}
