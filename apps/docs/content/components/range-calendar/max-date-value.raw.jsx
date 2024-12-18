import {RangeCalendar} from "@landing-ui/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function App() {
  return <RangeCalendar aria-label="Date (Max Date Value)" maxValue={today(getLocalTimeZone())} />;
}
