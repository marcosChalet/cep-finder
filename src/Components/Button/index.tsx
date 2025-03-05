type ButtonType = {
  children: string;
  onClick?: () => void;
  className?: string;
};

function Button({ children, onClick = () => {}, className = '' }: ButtonType) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-16 w-full border-white/30 border-[1px] rounded-sm text-lg font-bold bg-neutral-900 px-3 cursor-pointer hover:bg-neutral-950 duration-500 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
