import React, { useCallback } from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import Button from "../../../Button/Button";
import NoColor from "../../../Icon/Icons/components/NoColor";
import { VibeComponentProps } from "../../../../types";
import VibeComponent from "../../../../types/VibeComponent";
import { NOOP } from "../../../../utils/function-utils";

interface ColorPickerClearButtonProps extends VibeComponentProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
  text?: string;
  Icon: ({ size, className }: { size?: string; className?: string }) => JSX.Element;
  isActive: boolean;
}

export const ColorPickerClearButton: VibeComponent<ColorPickerClearButtonProps> = React.forwardRef(
  ({ onClick, text, Icon, isActive }, ref) => {
    const onItemClicked = useCallback(() => onClick(null), [onClick]);

    const { onSelectionAction } = useGridKeyboardNavigation({
      ref: ref as React.MutableRefObject<HTMLElement>,
      itemsCount: 1,
      numberOfItemsInLine: 1,
      onItemClicked, // hack - we don't really have a grid, it's just for keyboard navigation outside the clear button
      getItemByIndex: NOOP //hack - we don't really have a grid, it's just for keyboard navigation outside the clear button
    });

    return (
      <Button
        ref={ref}
        size={Button.sizes.SMALL}
        kind={Button.kinds.TERTIARY}
        onClick={() => onSelectionAction(-1)} //hack - we don't really have a grid, it's just for keyboard navigation outside the clear button
        active={isActive}
        className="clear-color-button"
      >
        <Icon size="16" className="clear-color-icon" />
        {text}
      </Button>
    );
  }
);

ColorPickerClearButton.defaultProps = {
  text: "Clear",
  Icon: NoColor
};