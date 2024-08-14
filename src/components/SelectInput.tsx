import { ChangeEventHandler } from 'react';
import kebabCase from 'lodash/kebabCase';

interface DropdownInputProps {
  options: string[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  label: string;
  name: string;
}

const createOption = (value: string) => (
  <option value={value} key={value}>
    {value}
  </option>
);

const SelectInput = ({
  options,
  value,
  onChange,
  label,
  name,
}: DropdownInputProps) => {
  const id = kebabCase(name);

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={id}
          name={name} // Added name attribute
          onChange={onChange}
          value={value}
        >
          {options.map(createOption)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SelectInput;
