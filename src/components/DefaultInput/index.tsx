import type React from 'react';
import styles from './styles.module.css';

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

      <input
        className={styles.input}
        id={id}
        type={type}
        {...rest}
        placeholder='Digite algo'
      />
    </>
  );
}
