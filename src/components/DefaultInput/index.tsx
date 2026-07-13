import type React from 'react';

type DefaltInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaltInputProps) {
  return (
    <>
      {labelText && (
        <label id={id} htmlFor='input'>
          {labelText}
        </label>
      )}

      <input id={id} type={type} {...rest} />
    </>
  );
}
