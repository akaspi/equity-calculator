interface ResultBoxProps {
    value: string;
    onClose: () => void;
}

const ResultBox = ({ value, onClose }: ResultBoxProps) => {
    return (
        <div id="toast-default"
             className="flex items-center justify-between w-full p-4 text-gray-700 bg-green-200 rounded-lg shadow"
             role="alert">
            <div className="flex-grow text-center text-sm font-normal">{value}</div>
            <button type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-green-200 text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8"
                    data-dismiss-target="#toast-default" aria-label="Close" onClick={onClose}>
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
    );
};

export default ResultBox;
