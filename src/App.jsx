import { useState } from "react";
import Count from "./components/Count";
import Button from "./components/Button";
import { RxReset } from "react-icons/rx";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
const App = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  const handleNext = () => {
    setCount(count + 1);
  };

  const handlePrev = () => {
    setCount(count - 1);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-lime-800 text-white">
      <div>
        <div className="flex items-center flex-col px-24 py-16 bg-lime-500 rounded-t-lg">
          <h1 className="text-2xl font-medium text-lime-900 uppercase mb-8 text-center">
            Fancy <br />
            Counter
          </h1>
          <Count count={count} />
          <Button
            className={"text-lime-700 hover:text-lime-900"}
            icon={<RxReset />}
            onClick={handleReset}
          />
        </div>
        <div className="bg-lime-950 rounded-b-lg flex items-center justify-around p-5">
          <Button
            className={"text-lime-400 hover:text-lime-500"}
            icon={<FaMinus />}
            onClick={handlePrev}
          />
          <Button
            icon={<FaPlus />}
            className={"text-lime-400 hover:text-lime-500"}
            onClick={handleNext}
          />
        </div>
      </div>
    </main>
  );
};
export default App;
