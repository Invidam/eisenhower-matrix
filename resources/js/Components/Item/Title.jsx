import { TextField } from "@mui/material";
import * as React from "react";

export default function Title({ data, setData }) {
    return (
        <div>
            <TextField
                label="Title"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
            />
        </div>
    );
}
