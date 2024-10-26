"use client";  // Ensures this component works on the client side
import { useState, useRef } from "react";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

// Define a union type for the choices
type ChoiceType = "DIY" | "Agency";

// Progress bar component
function ProgressBar({ step }: { step: number }) {
  const progressPercentage = (step / 4) * 100;
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
            Progress
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
        <div
          style={{ width: `${progressPercentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 transition-all duration-300"
        ></div>
      </div>
    </div>
  );
}

export default function InteractiveJourney() {
  const [path, setPath] = useState<ChoiceType | "">(""); // Use union type for path state
  const [step, setStep] = useState(1); // Step management
  const [score, setScore] = useState({ timeSaved: 0, stressLevel: 0, quality: 0 }); // Final results
  const [buttonMoved, setButtonMoved] = useState(false); // To track if button has moved
  const diyButtonRef = useRef<HTMLButtonElement>(null); // Create a ref for the button

  // Function to handle user's path choice
  const handlePathChoice = (choice: ChoiceType) => {
    setPath(choice); // Update the path state
    setStep(2); // Move to step 2
    if (choice === "Agency") {
      setScore({ timeSaved: 8, stressLevel: 2, quality: 9 }); // Initial score for agency
    } else {
      setScore({ timeSaved: 2, stressLevel: 8, quality: 5 }); // Initial score for DIY
    }
  };

  const handleNextStep = () => {
    if (path === "DIY") {
      setScore({
        timeSaved: score.timeSaved - 1,
        stressLevel: score.stressLevel + 1,
        quality: score.quality - 1,
      });
    } else {
      setScore({
        timeSaved: score.timeSaved + 1,
        stressLevel: score.stressLevel - 1,
        quality: score.quality + 1,
      });
    }
    setStep(step + 1); // Increment the step
  };

  const resetGame = () => {
    setPath(""); // Reset the path to an empty string
    setStep(1); // Reset to step 1
    setScore({ timeSaved: 0, stressLevel: 0, quality: 0 }); // Reset score
    setButtonMoved(false); // Reset button position
  };

  // Function to move the "DIY" button to a random position on hover
  const moveButton = () => {
    if (diyButtonRef.current) { // Check if the ref is available
      const randomTop = Math.floor(Math.random() * 80) + 10; // Random top between 10% and 90%
      const randomLeft = Math.floor(Math.random() * 80) + 10; // Random left between 10% and 90%
      diyButtonRef.current.style.position = "absolute";
      diyButtonRef.current.style.top = `${randomTop}%`;
      diyButtonRef.current.style.left = `${randomLeft}%`;
      setButtonMoved(true);
    }
  };

  return (
    <section className="relative">
      {/* Background shapes */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2">
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50">
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="text-4xl font-semibold text-gray-200 animate-fade-in">
              Choose Your Path
            </h2>
            <p className="text-lg text-indigo-200/65 animate-slide-up">
              Play through a scenario to see how our services can simplify your journey!
            </p>
          </div>

          {/* Progress Bar */}
          <ProgressBar step={step} />

          {/* Game Logic */}
          {step === 1 && (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-200 animate-slide-up">
                Step 1: You're Starting a New Project
              </h3>
              <p className="text-indigo-200/65 mb-6 animate-fade-in">
                Do you want to handle everything yourself or let our agency help?
              </p>

              {/* Button Container */}
              <div className="flex justify-center space-x-4">
                {/* DIY Button */}
                <button
                  ref={diyButtonRef} // Attach the ref to the button
                  onMouseEnter={moveButton} // Moves the button on hover
                  className="btn mb-4 w-full sm:w-auto transition-all duration-300"
                >
                  Try DIY (Do It Yourself)
                </button>

                {/* Agency Button */}
                <button
                  onClick={() => handlePathChoice("Agency")}
                  className="btn mb-4 w-full sm:w-auto"
                >
                  Use Our Services
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && path === "DIY" && (
            <div className="text-center animate-slide-up">
              <h3 className="text-2xl font-semibold text-gray-200">
                Step 2: DIY Challenges
              </h3>
              <p className="text-indigo-200/65 mb-6">
                You start working on your own, but you quickly realize editing, managing social media, and graphic design are taking much more time than you thought.
              </p>
              <button onClick={handleNextStep} className="btn mb-4 w-full sm:w-auto">
                Next
              </button>
            </div>
          )}

          {step === 2 && path === "Agency" && (
            <div className="text-center animate-slide-up">
              <h3 className="text-2xl font-semibold text-gray-200">
                Step 2: Seamless Progress with Our Agency
              </h3>
              <p className="text-indigo-200/65 mb-6">
                You submit your project to our agency. Within hours, you're connected with a professional who starts working immediately.
              </p>
              <button onClick={handleNextStep} className="btn mb-4 w-full sm:w-auto">
                Next
              </button>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && path === "DIY" && (
            <div className="text-center animate-slide-up">
              <h3 className="text-2xl font-semibold text-gray-200">
                Step 3: Overwhelmed with Tasks
              </h3>
              <p className="text-indigo-200/65 mb-6">
                Managing all these tasks is becoming overwhelming. The quality of your work is slipping, and you're spending too much time on tasks that aren't your specialty.
              </p>
              <button onClick={handleNextStep} className="btn mb-4 w-full sm:w-auto">
                Final Step
              </button>
            </div>
          )}

          {step === 3 && path === "Agency" && (
            <div className="text-center animate-slide-up">
              <h3 className="text-2xl font-semibold text-gray-200">
                Step 3: Smooth Sailing
              </h3>
              <p className="text-indigo-200/65 mb-6">
                You're stress-free as our team handles the time-consuming tasks. Your content quality is improving, and you have more time to focus on what you do best.
              </p>
              <button onClick={handleNextStep} className="btn mb-4 w-full sm:w-auto">
                Final Step
              </button>
            </div>
          )}

          {/* Final Step */}
          {step === 4 && (
            <div className="text-center animate-slide-up">
              <h3 className="text-2xl font-semibold text-gray-200">
                Final Step: {path === "DIY" ? "DIY Outcome" : "Success with Our Agency"}
              </h3>
              <p className="text-indigo-200/65 mb-6">
                {path === "DIY"
                  ? `The project took longer than expected. Time saved: ${score.timeSaved}, Stress: ${score.stressLevel}, Quality: ${score.quality}`
                  : `Your project was completed on time. Time saved: ${score.timeSaved}, Stress: ${score.stressLevel}, Quality: ${score.quality}`}
              </p>
              <button onClick={resetGame} className="btn mb-4 w-full sm:w-auto">
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
