import * as React from "react";
import { FormControl } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

export default function FixedPriority() {
    return (
        <FormControl sx={{ m: 1, width: "12ch" }}>
            <InputLabel id="demo-simple-select-label">From</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-readonly"
                defaultValue={1}
                inputProps={{ readOnly: true }}
                label="123"
            >
                <MenuItem key={1} value={1}>
                    P{1}
                </MenuItem>
            </Select>
        </FormControl>
    );
}
