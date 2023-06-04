import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Button } from "@mui/material";
import ApiFetch from "@/classes/ApiFetch";
import { useEffect } from "react";

export default function MatrixTodo({ data }) {
    const [checkStatus, setCheckStatus] = useState(false);
    const textStyle = {
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
    };
    const toggleTodoItem = () => {
        console.log(checkStatus);

        setCheckStatus(!checkStatus);
        ApiFetch.patch(`/items/${data.id}/done`);
    };

    useEffect(() => {
        setCheckStatus(data.is_done);
    }, [data.is_done]);

    return (
        <TableRow
            key={data.id}
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
            }}
        >
            <TableCell style={textStyle}>
                {console.log(`${data.id}'s status: ${checkStatus}`)}
                <Checkbox checked={checkStatus} onChange={toggleTodoItem} />
            </TableCell>
            <TableCell style={textStyle} component="th" scope="row">
                {data.title}
            </TableCell>
            <TableCell
                style={textStyle}
                align="left"
                component="th"
                scope="row"
            >
                {formatTimestamp(data.deadline)}
            </TableCell>
            <TableCell
                style={textStyle}
                align="left"
                component="th"
                scope="row"
            >
                {data.priority}
            </TableCell>
        </TableRow>
    );
}

function formatTimestamp(db_time) {
    const date = new Date(db_time * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
}
