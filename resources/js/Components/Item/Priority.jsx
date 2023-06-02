import * as React from "react";
import { FormControl } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

export default function Priority({ data, setData }) {
    return (
        <FormControl sx={{ m: 1, width: "12ch" }}>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.priority || ""}
                label="priority"
                onChange={(e) => {
                    console.log(e);
                    setData("priority", e.target.value);
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
