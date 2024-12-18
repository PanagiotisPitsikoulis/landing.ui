import {forwardRef, HTMLNextUIProps} from "@landing-ui/system";
import {useDOMRef} from "@landing-ui/react-utils";
import {clsx} from "@landing-ui/shared-utils";

import {useModalContext} from "./modal-context";

export interface ModalFooterProps extends HTMLNextUIProps<"footer"> {}

const ModalFooter = forwardRef<"footer", ModalFooterProps>((props, ref) => {
  const {as, children, className, ...otherProps} = props;

  const {slots, classNames} = useModalContext();

  const domRef = useDOMRef(ref);

  const Component = as || "footer";

  return (
    <Component
      ref={domRef}
      className={slots.footer({class: clsx(classNames?.footer, className)})}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ModalFooter.displayName = "NextUI.ModalFooter";

export default ModalFooter;
