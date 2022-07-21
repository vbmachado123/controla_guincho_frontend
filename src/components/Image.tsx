interface ImageProps {
    title:string;
    description? : string;
    path : string;
    onClick? : () => void;

}
export function Image({title, path, description, onClick} : ImageProps) {
    return(
        <div onClick={() => onClick} className="flex flex-col items-start hover:cursor-pointer px-4">
            <p className="text-black text-sm ml-3">{title}</p>
             <img className="w-48 h-32 rounded-2xl shadow-xl" src={path} />
            <p className="text-black text-sm ml-3 w-48 overflow-clip">{description}</p>
        </div>
    );
}