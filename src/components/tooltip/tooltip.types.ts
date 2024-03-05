import { ReactNode } from "react";

export interface TooltipProps{
    content?: string;
    children?: ReactNode;
    isOpenByClick?: boolean;
    position?: 'top' | 'bottom' | 'left' | 'right'
}