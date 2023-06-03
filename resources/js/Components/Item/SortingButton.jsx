import * as React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SortIcon from "@mui/icons-material/Sort";
import { Button } from "@mui/material";

export default function SortingButton({ sortDirection, setSortDirection }) {
    return (
        <Button
            size="small"
            onClick={setSortDirection}
            startIcon={
                sortDirection === ""
                ? (<SortIcon />) 
                : sortDirection === "asc" 
                ? (<ArrowUpwardIcon />) 
                : (<ArrowDownwardIcon />)
            }
            style={{
                marginLeft: "5px",
                maxWidth: "25px",
                maxHeight: "25px",
                minWidth: "25px",
                minHeight: "25px",
            }}
        ></Button>
    );
}
