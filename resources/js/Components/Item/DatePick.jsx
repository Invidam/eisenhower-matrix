import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/en";
import FormControl from "@mui/material/FormControl";
export default function DatePick({
    data,
    setData,
    selectedDate,
    setSelectedDate,
}) {
    return (
        <FormControl sx={{ m: 1, width: "25ch" }}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"en"}
            >
                <DatePicker
                    // defaultValue={defaultValue}
                    value={selectedDate}
                    onChange={(date) => {
                        console.log("selectedDate", selectedDate);
                        console.log("date", date);
                        console.log("TO DEADLINE: ", new Date(date));
                        console.log(data);
                        setData("deadline", new Date(date));
                        setSelectedDate(date);
                        console.log("selectedDate", selectedDate);
                    }}
                />
            </LocalizationProvider>
        </FormControl>
    );
}
