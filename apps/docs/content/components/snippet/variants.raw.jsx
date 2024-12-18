import {Snippet} from "@landing-ui/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet variant="bordered">npm install @landing-ui/react</Snippet>
      <Snippet color="warning" variant="flat">
        npm install @landing-ui/react
      </Snippet>
      <Snippet color="primary" variant="solid">
        npm install @landing-ui/react
      </Snippet>
      <Snippet color="secondary" variant="shadow">
        npm install @landing-ui/react
      </Snippet>
    </div>
  );
}
