import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "..";
import { ArrowLeft, Camera, User } from "phosphor-react";
import { ScreenshotButton } from "./../ScreenshotButton";
import { FormEvent, useState } from "react";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}
export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestartRequested,
    onFeedbackSent,
    } 
    : FeedbackContentStepProps) {

const [screenshot, setScreenshot] = useState<string | null>(null);
const [comment, setComment] = useState('');

function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    console.log({
        screenshot,
        comment,
    });
    onFeedbackSent();
}

const feedbackTypeInfo = feedbackTypes[feedbackType];
   return (

        <>
             <header>
               <button type="button" 
               onClick={onFeedbackRestartRequested}
               className=" top-5 left-2 absolute text-zinc-600 hover:text-zinc-100">
                   <ArrowLeft weight="bold" className="w-4 h-4"/>
                   </button> 
                <span className="text-xl leading-6 flex items-center gap-2">
                     <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                    </span>
                <CloseButton/>
            </header>


          <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
              <textarea 
              className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-600 border-zinc-600 bg-transparent rounded-md focus:border-green-500 focus:ring-green-500 focus:ring-1 focus:outline-none resize-none scrollbard scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
              placeholder="Conte com detalhes o que está acontecendo..."
              onChange={(e) => setComment(e.target.value)}
              />

              <footer  className="flex gap-2 mt-2">
                <ScreenshotButton 
                screenshot={screenshot}
                onScreenshotTook={setScreenshot}
                />

                  <button type="submit"
                  
                  disabled={comment.length === 0 }
                  className="p-2 bg-green-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
                  >
                      Enviar Feedback
                  </button>
              </footer>
          </form>

        </>
        
    );
}