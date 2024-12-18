import {forwardRef} from "@landing-ui/system";
import {FreeSoloPopover} from "@landing-ui/popover";
import {ScrollShadow} from "@landing-ui/scroll-shadow";
import {ChevronDownIcon, CloseIcon} from "@landing-ui/shared-icons";
import {Listbox} from "@landing-ui/listbox";
import {Button} from "@landing-ui/button";
import {Input} from "@landing-ui/input";
import {ForwardedRef, ReactElement} from "react";
import {AnimatePresence} from "framer-motion";

import {UseAutocompleteProps, useAutocomplete} from "./use-autocomplete";

interface Props<T> extends UseAutocompleteProps<T> {}

export type AutocompleteProps<T extends object = object> = Props<T>;

const Autocomplete = forwardRef(function Autocomplete<T extends object>(
  props: AutocompleteProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const {
    Component,
    isOpen,
    disableAnimation,
    selectorIcon = <ChevronDownIcon />,
    clearIcon = <CloseIcon />,
    endContent,
    getBaseProps,
    getSelectorButtonProps,
    getInputProps,
    getListBoxProps,
    getPopoverProps,
    getEmptyPopoverProps,
    getClearButtonProps,
    getListBoxWrapperProps,
    getEndContentWrapperProps,
  } = useAutocomplete<T>({...props, ref});

  const listboxProps = getListBoxProps();

  const popoverContent = isOpen ? (
    <FreeSoloPopover {...getPopoverProps()}>
      <ScrollShadow {...getListBoxWrapperProps()}>
        <Listbox {...listboxProps} />
      </ScrollShadow>
    </FreeSoloPopover>
  ) : listboxProps.state?.collection.size === 0 ? (
    <div {...getEmptyPopoverProps()} />
  ) : null;

  return (
    <Component {...getBaseProps()}>
      <Input
        {...getInputProps()}
        endContent={
          <div {...getEndContentWrapperProps()}>
            {endContent || <Button {...getClearButtonProps()}>{clearIcon}</Button>}
            <Button {...getSelectorButtonProps()}>{selectorIcon}</Button>
          </div>
        }
      />
      {disableAnimation ? popoverContent : <AnimatePresence>{popoverContent}</AnimatePresence>}
    </Component>
  );
}) as <T extends object>(props: AutocompleteProps<T>) => ReactElement;

export default Autocomplete;
