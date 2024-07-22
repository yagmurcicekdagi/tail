import * as Margin from "./Margin";
import * as Width from "./Width";
import * as Alignment from "./Alignment";
import * as Layout from "./Layout";
import { Optional } from "./Utils";
export type t = {
    tag: "Stack";
    elements: Layout.t[];
    margin: Margin.t;
    alignment: Alignment.t;
    width: Width.t;
    is_fill: boolean;
};
type Stack = t;
export declare function from(w: Optional<Stack>): Stack;
export declare function stack(elements: Layout.t[], margin: Margin.t, alignment: Alignment.t, width: Width.t, is_fill: boolean): Stack;
export declare function default_(): Stack;
export declare function boundWidth(s: Stack, width: number): Stack;
export declare function scaleWidth(s: Stack, scale: number): Stack;
export {};
