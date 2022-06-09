interface ButtonProps {
    onClick: () => void;
    label: string;
    style: string;
}

export function Button({ onClick, label, style }: ButtonProps) {

    return (
        <button className={`btn mr-3 ${style} rounded-2xl px-6 py-3  font-normal drop-shadow-lg hover:bg-green-600 hover:shadow-2xl transition-all translate-x-0 animate-none`} onClick={onClick}>
            {label.toUpperCase()}
        </button>
    );

}