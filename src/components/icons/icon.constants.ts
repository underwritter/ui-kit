import IconCloseClear from "./icons-svg/close-x-exit.svg";
import IconArrowRight from "./icons-svg/arrow-right.svg";
import IconArrowLeft from "./icons-svg/arrow-left.svg";
import IconArrowDown from "./icons-svg/arrow-down.svg";
import IconArrowUp from "./icons-svg/arrow-up.svg";
import IconInfo from "./icons-svg/info-circle.svg";
import IconSearch from "./icons-svg/search.svg";
import IconCheck from "./icons-svg/check.svg";
import IconSun from "./icons-svg/sunrise.svg";
import IconShow from "./icons-svg/show.svg";
import IconHide from "./icons-svg/hide.svg";
import IconMoon from "./icons-svg/moon.svg";
import {IconName, SVGIcon} from "./icon.types";

export const iconSvg: {[key in IconName]: SVGIcon} = {
  IconCloseClear: IconCloseClear,
  IconArrowRight: IconArrowRight,
  IconArrowUp: IconArrowUp,
  IconArrowLeft: IconArrowLeft,
  IconArrowDown: IconArrowDown,
  IconCheck: IconCheck,
  IconShow: IconShow,
  IconHide: IconHide,
  IconInfo: IconInfo,
  IconMoon: IconMoon,
  IconSun: IconSun,
  IconSearch: IconSearch,
};
