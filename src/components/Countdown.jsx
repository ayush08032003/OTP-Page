import { useState, useEffect } from "react";

/**
 * Countdown component that displays a countdown timer and updates every second.
 * It accepts a `time` prop to initialize the countdown time and a `reset` prop to allow resetting the countdown.
 *
 * @component
 * @example
 * // Example usage of the Countdown component
 * <Countdown time={600} reset={false} textColor="text-blue-500" />
 *
 * @param {Object} props - The props for the component.
 * @param {number} props.time - The initial time for the countdown in seconds.
 * @param {boolean} [props.reset=false] - A flag that resets the countdown when changed (optional).
 * @param {string} [props.textColor="text-black"] - The CSS class for the text color (optional).
 * @param {string} [props.className] - Additional CSS classes for styling (optional).
 *
 * @returns {JSX.Element} A rendered JSX element displaying the countdown timer.
 */
export function Countdown({
  time,
  reset,
  textColor = "text-black",
  className,
  ...props
}) {
  const [timer, setTimer] = useState(time);
  useEffect(() => {
    setTimer(time);
    const clockTimer = setInterval(() => {
      setTimer((time) => (time - 1 >= 0 ? time - 1 : 0));
    }, 1000);

    return () => clearTimeout(clockTimer);
  }, [time, reset]);

  // console.log(timer);

  const minute = String(Math.floor(timer / 60)).padStart(2, "0");
  const second = String(timer % 60).padStart(2, "0");
  return (
    <div className={`${textColor} ${className} ${props} flex gap-1`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-clock mt-0.5"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 7v5l3 3" />
      </svg>
      {minute} : {second}
    </div>
  );
}
