//TODO: hold state of input and date
import { proxy } from "valtio";

export const state = proxy({ date: "", input: "hello" });
