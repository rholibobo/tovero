function CustomButton({ children, variant = "primary", className = "" }) {
  const buttonClasses = `
         rounded-[20px] bg-btn text-white
        ${variant === "primary" ? "py-2 px-6" : ""}
        ${variant === "secondary" ? "w-full" : ""}
        ${className}
    `;
  return <button className={buttonClasses}>{children}</button>;
}

export default CustomButton;
