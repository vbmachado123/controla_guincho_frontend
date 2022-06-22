interface ImageProps {
    title:string;
    path : string;
}
export function Image({title, path} : ImageProps) {
    return(
        <div className="flex flex-col items-start hover:cursor-pointer px-4">
            <p className="text-black text-sm ml-3">{title}</p>
             <img className="w-48 h-32 rounded-2xl shadow-xl" src={path} />
            <p className="text-black text-sm ml-3 w-48 overflow-clip">{path}</p>
        </div>
    );
}