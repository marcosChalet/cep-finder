import { InputHTMLAttributes, Ref } from 'react';

type FieldType = {
  labelText: string;
  inputClassName?: string;
  labelClassName?: string;
  ref?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

function Field({
  labelText,
  ref,
  labelClassName = '',
  inputClassName = '',
  type = 'string',
  ...rest
}: FieldType) {
  return (
    <label
      className={`flex flex-col text-md md:text-xl cursor-pointer font-bold ${labelClassName}`}
    >
      {labelText}
      <input
        ref={ref}
        type={type}
        className={`bg-neutral-900 rounded-sm h-11 px-3 w-full md:text-lg mt-1.5 ${inputClassName}`}
        {...rest}
      />
    </label>
  );
}

export default Field;
