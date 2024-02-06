import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "react";
import {AppDispatch, RootState} from "../store";

export const useAppDispatch = (): Dispatch<unknown> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export interface ResponceData {
    name: string;
    id: number;
}