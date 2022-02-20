import { useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../state/context";
import { ScheduleTime } from "./schedule";

export function Input() {
  const snap = useSnapshot(state);

  const [input, setInput] = useState(snap.input);

  function handleSubmit(e) {
    e.preventDefault();
    state.input = input;
    console.log("state: ", state, " input: ", input);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <form
        className="m-8 flex flex-col gap-10 justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          placeholder="type your tweet here."
          className="p-2 mx-2 text-xl stroke-black stroke-lg text-black w-full rounded-lg"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <ScheduleTime />
        <button className="stroke-black stroke-2 bg-green-700 text-white p-5 w-32">
          Send tweet
        </button>
      </form>
    </div>
  );
}
