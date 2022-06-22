interface TextMultipleStyleProps {
    title:string;
    content:string;
    titleStyle? : string;
    contentStyle? : string;
}

export function TextMultipleStyle({title, content, titleStyle, contentStyle} : TextMultipleStyleProps) {
    return (
            <h4 className={`${titleStyle} text-green-500 font-bold text-lg`}>
                {title}: <span className={`${contentStyle} text-black text-lg font-normal`}> {content}</span>
            </h4>    
    );
}