import type React from 'react';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({
  type,
  id,
  labelText,
  ...props
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {/* {labelText ? <label htmlFor={id}>{labelText}</label> : null} */}
      {/* <label htmlFor={id}>{labelText}</label> */}
      <input type={type} id={id} {...props} />
    </>
  );
}
