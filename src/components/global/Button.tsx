import React, { Children } from 'react'

type ButtonProps = {
    text: string;
    classNames?: string;
    buttonType: "button" | "submit" | "reset";
    onClick?: () => void;
  };

const Button = ({text, classNames, buttonType, onClick}: ButtonProps) => {
  return (
    <button type={buttonType} onClick={onClick} className={`py-3 px-14 text-lg rounded-xl ${classNames && classNames}`}>
        {text}
    </button>
  )
}

export default Button