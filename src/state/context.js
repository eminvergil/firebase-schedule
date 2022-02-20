//TODO: hold state of input and date
import { proxy } from "valtio";

export const state = proxy({
  date: new Date("1998-08-18T21:11:54"),
  input: "hello",
});
