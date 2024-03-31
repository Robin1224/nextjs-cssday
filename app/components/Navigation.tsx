"use client"

import { useState } from "react";

interface Props {
  data: any;
}
const Navigation = (props: Props) => {
  const [currentYear, setCurrentYear] = useState(2023);

  return (
    <div className="z-10 absolute w-screen flex justify-between px-8">
      <button onClick={() => setCurrentYear(
        prevYear => {
          if (prevYear == 2022) {return 2019} else if (prevYear > 2013) { return (prevYear - 1)} else {return prevYear};
        }
      )}>{'<'}</button>
      <div className="flex flex-col">
      <h1>{props.data[currentYear].title}</h1>
      <p>
        test
      </p>
      </div>
      <button onClick={() => setCurrentYear(
        prevYear => {
          if (prevYear == 2019) {return 2022} else if (prevYear < 2024) { return (prevYear + 1)} else {return prevYear};
        }
      )}
      >{'>'}</button>
    </div>
  );
};
export default Navigation;
