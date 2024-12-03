import { useState } from "react";
import { Countdown, Button, OTP } from "./components";

export default function App() {
  const number = 6;
  const [timer, setTimer] = useState(600);
  const [isReset, setIsReset] = useState(true);
  const [values, setValues] = useState(new Array(number).fill(""));

  return (
    <div className="min-h-screen bg-blue-customBackground flex flex-col items-center">
      <div className="text-white text-2xl mt-16">
        <span className="text-green-logoText">Webinar</span>.gg
      </div>

      <div className="text-white font-bold text-2xl mt-16">
        Check Your Email for A Code
      </div>

      <div className="text-blue-textColor mt-10">
        Please enter the verification code sent to your given email id{" "}
      </div>

      <OTP
        values={values}
        setValues={setValues}
        number={number}
        className={`bg-blue-inputColor text-white text-xl rounded-xl pl-3 mt-4 border border-blue-textColor`}
      />

      <Countdown
        time={timer}
        textColor="text-blue-textColor"
        reset={isReset}
        className="mt-2"
      />

      <Button
        className="text-white bg-blue-buttonColor rounded-md w-80 py-3 font-bold  mt-10"
        onClick={() => {
          const otpValue = String(values.join("")).trim();
          console.log(otpValue);
          if (otpValue.length === 6) {
            console.log("Verify button clicked");
          }
        }}
      >
        Verify
      </Button>

      <div className="text-blue-textColor mt-1 text-sm">
        Can't find the email? Click{" "}
        <button
          className="underline text-[#c0dbfb]"
          href=""
          onClick={() => {
            console.log("Resend button clicked");
            setTimer(600);
            setIsReset(!isReset);
            // console.log(timer);
          }}
        >
          here
        </button>{" "}
        to resend.
      </div>
    </div>
  );
}
