import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/en";
import FormControl from "@mui/material/FormControl";

export default function DatePick({ data, setData }) {
    return (
        <FormControl sx={{ m: 1, width: "25ch" }}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"en"}
            >
                <DatePicker
                    value={data.date}
                    onChange={(date) => {
                        console.log(new Date(date));
                        setData("date", new Date(date));
                    }}
                />
            </LocalizationProvider>
        </FormControl>
    );
}
