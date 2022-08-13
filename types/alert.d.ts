export declare namespace JSX {
  interface AlertProps {
    title?: string;
    message?: string;
  }

  interface ActionProps {
    type?: "action" | "cancel" | "destructive";
    text?: string;
    children?: string | string[];
  }

  interface TextFieldProps {
    placeholder?: string;
    text?: string;
    secure?: boolean;
  }

  interface IntrinsicElements {
    alert: AlertProps;
    action: ActionProps;
    'text-field': TextFieldProps;
  }
}
