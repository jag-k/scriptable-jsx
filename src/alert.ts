// =============================
// Alert JSX Element processing
// =============================
function processAlertProps(alert: Alert, props: JSX.AlertProps) {
  if (props.title) {
    alert.title = props.title
  }
  if (props.message) {
    alert.message = props.message
  }
}

function processActionProps(alert: Alert, props: JSX.ActionProps, children?: string[] | string) {
  const text: string = props.text || (children instanceof Array ? children.join(" ") : children) || "";

  switch (props.type || "action") {
    case "action": {
      alert.addAction(text);
      break;
    }
    case "cancel": {
      alert.addCancelAction(text);
      break;
    }
    case "destructive": {
      alert.addDestructiveAction(text);
      break;
    }
  }
}

function processTextFieldProps(alert: Alert, props: JSX.TextFieldProps) {
  (props.secure ? alert.addSecureTextField : alert.addTextField)(props.placeholder || "", props.text || "");
}

function processAlertChildren(alert: Alert, children: any[]) {
  for (const child of children) {
    if (typeof child === "string") {
      return child
    }
    if (typeof child === "object") {
      if (child instanceof Array) {
        processAlertChildren(alert, child);
      } else if ("type" in child) {
        switch (child.type) {
          case "action": {
            processActionProps(alert, child.props || {}, child.children || "");
            break;
          }

          case "text-field": {
            processTextFieldProps(alert, child.props || {});
            break;
          }
        }
      }
    }
  }
}

export function alertCreateElement(
  element: unknown,
  props: Record<string, any>,
  ...children: any[]
) {
  if (typeof element === "string") {
    // intrinsic element
    switch (element) {
      case "alert":
        const alert = new Alert();
        processAlertChildren(alert, children);
        processAlertProps(alert, props || {});
        return alert;
      case "text-field":
        return {type: element, props}
      case "action":
        return {type: element, props, children};
    }
  }
}
