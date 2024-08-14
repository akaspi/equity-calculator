import { ChangeEventHandler } from 'react';
import kebabCase from 'lodash/kebabCase';

interface NumericInputProps {
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  name: string;
}

const NumericInput = ({ value, onChange, label, name }: NumericInputProps) => {
  const id = kebabCase(name);

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={id}
        name={name}
        type="number"
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default NumericInput;
