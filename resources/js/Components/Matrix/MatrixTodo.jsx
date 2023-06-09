import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Button, Box } from "@mui/material";
import ApiFetch from "@/classes/ApiFetch";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputTodo from "../Item/InputTodo";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function MatrixTodo({ makeRefresh, data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [checkStatus, setCheckStatus] = useState(false);

    const textStyle = {
        fontSize: "16px",
        fontWeight: "700",
        fontFamily: "Roboto, sans-serif",
        color: isTimeOver() ? "red" : "inherit",
    };
    const textStyle2 = {
        fontSize: "16px",
        fontWeight: "700",
        fontFamily: "Roboto, sans-serif",
    };
    const toggleTodoItem = () => {
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
                <Checkbox
                    checked={checkStatus || false}
                    onChange={toggleTodoItem}
                />
            </TableCell>
            <TableCell style={textStyle} component="th" scope="row">
                <Button
                    style={{
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: "700",
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                        color: "black",
                        textDecoration: checkStatus ? "line-through" : "none",
                    }}
                    onClick={handleOpen}
                >
                    {data.title}
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Edit Item
                        </Typography>
                        <InputTodo
                            makeRefresh={makeRefresh}
                            handleClose={handleClose}
                            _data={data}
                        />
                    </Box>
                </Modal>
            </TableCell>
            <TableCell
                style={textStyle}
                align="left"
                component="th"
                scope="row"
            >
                <div className={isTimeOver() ? "blink" : ""}>
                    {formatTimestamp(data.deadline)}
                </div>
            </TableCell>
            <TableCell
                style={textStyle2}
                align="left"
                component="th"
                scope="row"
            >
                {data.priority}
            </TableCell>
        </TableRow>
    );

    function isTimeOver() {
        return new Date(data.deadline * 1000) < Date.now();
    }
}

function formatTimestamp(db_time) {
    const date = new Date(db_time * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
}
