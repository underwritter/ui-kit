import {IconName, IconProps, IconInnerProps, DynamicProp} from "./icon.types";
import {iconSvg} from "./icon.constants";
import React, {FC} from "react";
import cn from "classnames";

const IconInner: FC<IconInnerProps> = ({
  name,
  size = 10,
  color,
  stroke = "none",
  onClick,
  style,
  className,
  ...generalProps
}) => {
  if (!iconSvg[name]) {
    return null;
  }

  const IconSVG = iconSvg[name];

  const cssStyles = {
    [DynamicProp.Width]: `${size}px`,
    [DynamicProp.Height]: `${size}px`,
    [DynamicProp.Fill]: color,
    [DynamicProp.Stroke]: stroke,
    ...style,
  };

  return (
    <IconSVG
      onClick={onClick}
      style={cssStyles}
      className={cn(className)}
      {...generalProps}
    />
  );
};

IconInner.displayName = "IconInner";

export const Icon = Object.fromEntries(
  Object.keys(IconName).map((key) => [
    key as IconName,
    (props: IconProps) => <IconInner name={key as IconName} {...props} />,
  ])
) as {[key in IconName]: React.FC<IconProps>};
