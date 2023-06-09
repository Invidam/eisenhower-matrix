import * as React from "react";
import { FormControl } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

export default function EndPriority({ data, setData }) {
    return (
        <FormControl sx={{ m: 1, width: "12ch" }}>
            <InputLabel id="demo-simple-select-label">To</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.important_priority_range || ""}
                label="to"
                onChange={(e) => {
                    setData("important_priority_range", e.target.value);
                }}
            >
                {[1, 2, 3, 4, 5].map((item) => {
                    return (
                        <MenuItem key={item} value={item}>
                            P{item}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}
