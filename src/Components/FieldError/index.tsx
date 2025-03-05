type FieldErrorType = {
  children: string;
  className?: string;
};

function FieldError({ children, className = '' }: FieldErrorType) {
  return (
    <p
      className={`absolute right-0 text-sm text-red-700 select-none ${className}`}
    >
      {children}
    </p>
  );
}

export default FieldError;
