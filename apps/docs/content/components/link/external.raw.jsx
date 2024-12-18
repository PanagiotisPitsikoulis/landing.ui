import {Link} from "@landing-ui/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Link isExternal href="https://github.com/PanagiotisPitsikoulis/landing.ui">
        External Link
      </Link>
      <Link isExternal showAnchorIcon href="https://github.com/PanagiotisPitsikoulis/landing.ui">
        External Link Anchor
      </Link>
    </div>
  );
}
