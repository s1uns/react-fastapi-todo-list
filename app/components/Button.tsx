import React from "react";
type ButtonType = "button" | "submit" | "reset" | undefined;
interface ButtonProps {
    children: React.ReactNode;
    handleClick?: () => void;
    styles: string;
    type?: ButtonType;
    title: string;
    disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            onClick={props?.handleClick}
            className={`${props.styles} btn`}
            type={props?.type}
            title={props.title}
            disabled={props?.disabled}
        >
            {props.children}
        </button>
    );
};
