import { TextField } from "@mui/material";
import * as React from "react";

export default function Description({ data, setData }) {
    return (
        <TextField
            id="outlined-multiline-static"
            label="description"
            multiline
            rows={2}
            value={data.description}
            onChange={(e) => {
                setData("description", e.target.value);
                console.log("dddddddddddddddddATA: ", data);
                console.log("VvvvvvvvvvvvvAL: ", e.target.value);
            }}
            sx={{ m: 1, width: "65ch" }}
        />
    );
}
