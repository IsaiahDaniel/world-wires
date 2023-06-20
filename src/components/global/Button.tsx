import React, { Children } from 'react'

type ButtonProps = {
    text: string;
    classNames?: string;
    buttonType: "button" | "submit" | "reset";
    onClick?: () => void;
  };

const Button = ({text, classNames, buttonType, onClick}: ButtonProps) => {
  return (
    <button type={buttonType} onClick={onClick} className={`text-white py-3 px-14 rounded-xl ${classNames && classNames}`}>
        {text}
    </button>
  )
}

export default Button