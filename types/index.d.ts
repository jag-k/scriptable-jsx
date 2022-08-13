/// <reference path="./alert.d.ts" />
/// <reference path="./widget.d.ts" />

import {JSX as Alert} from "./alert";
import {JSX as Widget} from "./widget";

export declare namespace JSX {
  export interface IntrinsicElements extends Alert.IntrinsicElements, Widget.IntrinsicElements {
  }
}
