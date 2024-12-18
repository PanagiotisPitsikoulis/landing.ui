import React, {forwardRef} from "react";
import {LinkIcon} from "@landing-ui/shared-icons";
import {linkAnchorClasses} from "@landing-ui/theme";
import {LinkProps, useLink} from "@landing-ui/react";

export interface MyLinkProps extends LinkProps {}

const MyLink = forwardRef<HTMLAnchorElement, MyLinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
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

MyLink.displayName = "MyLink";

export default MyLink;
