import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../../assets/icons/bug.svg';
import ideaImageUrl from '../../../assets/icons/idea.svg';
import thoughtImageUrl from '../../../assets/icons/thought.svg';
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
        source: bugImageUrl,
        alt: 'Bug Image'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
        source: ideaImageUrl,
        alt: 'Idea Image'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
        source: thoughtImageUrl,
        alt: 'Thought Image'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);
    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-white p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
         {
             feedbackSent ? 
             (
                 <FeedbackSucessStep onFeedbackRestartRequest={handleRestartFeedback}/>
             ) :
             <>
               {
               !feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
               ) : (
                 <FeedbackContentStep 
                 feedbackType={feedbackType}
                 onFeedbackRestartRequested={handleRestartFeedback}
                 onFeedbackSent={() => setFeedbackSent(true)}
                 />
               )}
             </>
             
         }

            <footer className="text-xs text-neural-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://tevitto.com" target='_blank'>teVitto</a> 
            </footer>
        </div>
    );
}