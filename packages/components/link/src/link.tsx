import {forwardRef} from "@landing-ui/system";
import {LinkIcon} from "@landing-ui/shared-icons";
import {linkAnchorClasses} from "@landing-ui/theme";

import {UseLinkProps, useLink} from "./use-link";

export interface LinkProps extends UseLinkProps {}

const Link = forwardRef<"a", LinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ref,
    ...props,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

Link.displayName = "NextUI.Link";

export default Link;
