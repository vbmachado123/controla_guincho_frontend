import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string | null) => void;
    screenshot: string | null;
}

export function ScreenshotButton({
     onScreenshotTook,
     screenshot }: 
 ScreenshotButtonProps) {

const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64Image = canvas.toDataURL('image/png');

        onScreenshotTook(base64Image);
        setIsTakingScreenshot(false);
    }

    if(screenshot) {
        return (
            <button
            type="button"
            onClick={() => onScreenshotTook(null)}
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-green-600 transition-colors"
            style={{backgroundImage: `url(${screenshot})`,
            backgroundPosition: 'right bottom',
            backgroundSize: 180,}}
            >

<Trash weight="fill"/>
            </button>
        );
    }

    return (
          <button
                  onClick={handleTakeScreenshot}
                  type="button"
                  className=" p-2 bg-white rounded-md border-transparent hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-green-500"
                  >
                   { isTakingScreenshot ? <Loading/> :  <Camera className="w-6 h-6 text-zinc-600"/>}
        </button>
    );
}