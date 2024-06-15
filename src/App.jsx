import { useState } from "react";
import wallpaper from "./assets/wallpaper.jpg";

function App() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [number, setNumber] = useState(0);

  const PickNumber = () => {
    let num = 0;

    if (min == "" || max == "") {
      alert("Please insert a number");
      setNumber(0);
      return;
    }

    if (min >= max) {
      alert("Maximum number must be greater than minimum number");
      setMax("");
      setNumber(0);
      return;
    }

    if (min < 0) {
      alert("Minimum number must be greater than or equal to 0");
      setMin("");
      setNumber(0);
      return;
    }

    for (let index = 0; num <= min; index++) {
      num = Math.random() * max + 1;
    }

    setNumber(parseInt(num));
  };

  return (
    <div>
      <img
        src={wallpaper}
        alt="wallpaper"
        className="w-screen h-screen absolute object-cover top-0 left-0"
      />
      <div className="bg-white/70 p-5 rounded text-center backdrop-blur-sm border border-white w-[300px] md:w-[400px] lg:w-[500px]">
        <h1 className="font-bold">Pick Random Number</h1>
        <div className="text-6xl font-bold mt-5">
          <label htmlFor="">{number}</label>
        </div>
        <div className="*:border *:border-slate-500 *:p-2 *:rounded *:text-center flex flex-col items-center gap-2 mt-5">
          <input
            type="number"
            name="min"
            id="min"
            onChange={(e) => setMin(parseInt(e.target.value))}
            value={min}
            placeholder="Min Number"
          />
          <input
            type="number"
            name="max"
            id="max"
            onChange={(e) => setMax(parseInt(e.target.value))}
            value={max}
            placeholder="Max Number"
          />
        </div>
        <div className="mt-5">
          <button
            className="bg-blue-500 py-2 px-5 rounded text-slate-50 hover:bg-blue-600"
            onClick={() => PickNumber()}
          >
            Pick
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
