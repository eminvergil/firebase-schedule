import React from "react";
//TODO: get components from index
import { Input } from "./components/input";

export function App() {
  return (
    <div className="p-16 w-full min-h-screen bg-green-200 justify-center flex flex-col mx-auto text-center max-w-4xl">
      <p>Schedule your tweet with this application</p>
      <Input />
    </div>
  );
}
