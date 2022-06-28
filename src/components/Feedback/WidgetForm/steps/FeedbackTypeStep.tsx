import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (

        <>
             <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>


<div className="flex py-8 gap-2 w-full">
              
              {
                  Object.entries(feedbackTypes).map(([key, value]) => {
                      return (
                          <button 
                            key={key}
                            className="bg-slate-300 rounded-lg py-5 w-24 flex-1  flex-col items-center gap-2 border-2 border-transparent hover:border-green-500 focus:border-green-500 focus:outline-none"
                            type="button"
                            onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
                          >
                              <img src={value.image.source} alt={value.image.alt}></img>
                              <span>{value.title}</span>

                          </button>
                      );
                  }
                  )}

            </div>

        </>
        
    );
}