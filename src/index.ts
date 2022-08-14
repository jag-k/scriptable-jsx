import {widgetCreateElement} from "./widget";
import {alertCreateElement} from "./alert";

const createElements = [widgetCreateElement, alertCreateElement];

export class ScriptableJSX {
  static createElement(
    element: unknown,
    props: Record<string, any>,
    ...children: any[]
  ) {
    for (const creator of createElements) {
      const res = creator(element, props, ...children)
      if (res) {
        return res
      }
    }
  }
}
