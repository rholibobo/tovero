function CustomButton({ children, variant = "primary", className = "" }) {
  const buttonClasses = `
  py-2.5 px-6 rounded-[20px] font-bold bg-btn text-white text-[14px]
        ${variant === "primary" ? " w-fit" : ""}
        ${variant === "secondary" ? "w-full" : ""}
        ${className}
    `;
  return <button className={buttonClasses}>{children}</button>;
}

export default CustomButton;
