import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { useSnapshot } from "valtio";
import { state } from "../state/context";

export default function TimePicker() {
  const snap = useSnapshot(state);
  const [value, setValue] = useState(snap.date);

  const handleChange = (newValue) => {
    setValue(newValue);
    state.date = newValue;
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
