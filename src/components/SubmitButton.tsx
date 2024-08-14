interface ButtonProps {
    label: string;
    disabled: boolean;
}

const SubmitButton = ({ label, disabled }: ButtonProps) => {
    const defaultClassNames = 'text-white font-medium text-sm text-center w-full py-2 px-4 rounded-lg';
    const enabledClassNames = 'bg-blue-500 hover:bg-blue-600';
    const disabledClassNames = 'bg-gray-500 cursor-not-allowed pointer-events-none';

    return (
        <button type='submit' disabled={disabled}
                className={`${defaultClassNames} ${disabled ? disabledClassNames : enabledClassNames}`}>
            {label}
        </button>
    );
};

export default SubmitButton;
