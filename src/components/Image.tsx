interface ImageProps {
    title:string;
    description? : string;
    path : string;
    footer?: string
    onClick? : () => void;

}
export function Image({title, path, description, onClick, footer} : ImageProps) {
    return(
        <div onClick={() => onClick} className="flex flex-col items-start hover:cursor-pointer px-4">
            <p className="text-black text-sm ml-3">{title}</p>
             <img className="w-48 h-32 rounded-2xl shadow-xl" src={path} />
            <p className="text-black text-sm ml-3 w-48 overflow-clip">{description}</p>
            {
                footer && <footer className="text-black text-sm ml-3 w-48 overflow-clip my-4" >{footer}</footer>
            }
        </div>
    );
}