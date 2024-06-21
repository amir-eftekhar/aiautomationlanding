import React from "react";

const Button = ({ styles }) => (
  <button 
  type="button" 
  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transform transition-all duration-500 ease-in-out hover:bg-blue-500 hover:scale-110 ${styles}`}
>
  Get Started
</button>
);


const Button1 = ({ styles, text }) => (
  <button 
    type="button" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gradient-to-r from-purple-500 to-purple-700 rounded-[10px] outline-none transform transition-all duration-500 ease-in-out hover:bg-purple-900 hover:scale-110 ${styles}`}
  >
    {text}
  </button>
);

export default Button;

export {Button1};