import type { ComponentProps } from "react";

type TVariant = "primary" | "success" | "warning" | "danger" | "secondry";

type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button
      {...rest}
      className="px-4 py-1  mt-10 rounded "
      style={{...style , ...CheckVariant(variant) }}
    >
      {children}
    </button>
  );
}

export default Button;

function CheckVariant(variant: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  } else if (variant === "secondry") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  }
}
