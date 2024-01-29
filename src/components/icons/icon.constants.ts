import CloseClear from "./icons-svg/close-x-exit.svg";
import ArrowRight from "./icons-svg/arrow-right.svg";
import ArrowLeft from "./icons-svg/arrow-left.svg";
import ArrowDown from "./icons-svg/arrow-down.svg";
import ArrowUp from "./icons-svg/arrow-up.svg";
import Info from "./icons-svg/info-circle.svg";
import Check from "./icons-svg/check.svg";
import Sun from "./icons-svg/sunrise.svg";
import Show from "./icons-svg/show.svg";
import Hide from "./icons-svg/hide.svg";
import Moon from "./icons-svg/moon.svg";
import {IconName, SVGIcon} from "./icon.types";

export const iconSvg: {[key in IconName]: SVGIcon} = {
  CloseClear: CloseClear,
  ArrowRight: ArrowRight,
  ArrowUp: ArrowUp,
  ArrowLeft: ArrowLeft,
  ArrowDown: ArrowDown,
  Check: Check,
  Show: Show,
  Hide: Hide,
  Info: Info,
  Moon: Moon,
  Sun: Sun,
};
