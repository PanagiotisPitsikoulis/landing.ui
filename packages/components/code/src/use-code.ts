import type {CodeVariantProps} from "@landing-ui/theme";
import type {HTMLNextUIProps, PropGetter} from "@landing-ui/system-rsc";

import {code} from "@landing-ui/theme";
import {mapPropsVariants} from "@landing-ui/system-rsc";
import {ReactRef} from "@landing-ui/react-utils";
import {useMemo} from "react";
import {objectToDeps} from "@landing-ui/shared-utils";

export interface UseCodeProps extends HTMLNextUIProps<"code">, CodeVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export function useCode(originalProps: UseCodeProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, code.variantKeys);

  const {as, children, className, ...otherProps} = props;

  const Component = as || "code";

  const classNames = useMemo(
    () =>
      code({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  const getCodeProps: PropGetter = () => {
    return {
      className: classNames,
      ...otherProps,
    };
  };

  return {Component, children, getCodeProps};
}

export type UseCodeReturn = ReturnType<typeof useCode>;
