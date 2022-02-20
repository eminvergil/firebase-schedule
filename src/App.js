import React from "react";
//TODO: get components from index
import { Input } from "./components/input";
import { ScheduleTime } from "./components/schedule";

export function App() {
  return (
    <div className="bg-black p-16 text-white w-full min-h-screen">
      <p>hello world 2</p>
      <Input />
      <ScheduleTime />
    </div>
  );
}
