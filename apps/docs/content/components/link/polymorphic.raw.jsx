import {Link, Button} from "@landing-ui/react";

export default function App() {
  return (
    <Button
      showAnchorIcon
      as={Link}
      color="primary"
      href="https://github.com/PanagiotisPitsikoulis/landing.ui"
      variant="solid"
    >
      Button Link
    </Button>
  );
}
