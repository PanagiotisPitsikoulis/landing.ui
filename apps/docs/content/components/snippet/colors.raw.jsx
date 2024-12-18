import {Snippet} from "@landing-ui/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet color="default">npm install @landing-ui/react</Snippet>
      <Snippet color="primary">npm install @landing-ui/react</Snippet>
      <Snippet color="secondary">npm install @landing-ui/react</Snippet>
      <Snippet color="success">npm install @landing-ui/react</Snippet>
      <Snippet color="warning">npm install @landing-ui/react</Snippet>
      <Snippet color="danger">npm install @landing-ui/react</Snippet>
    </div>
  );
}
