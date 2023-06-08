import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SortingButton from "../Item/SortingButton";
import Item from "../Item/Item";
import MatrixTodo from "./MatrixTodo";

export default function ItemList({ makeRefresh, tableList, title }) {
    const headerStyle = { fontSize: "16px", fontWeight: "bold" };
    return (
        <TableContainer
            className="table-parent"
            sx={{ height: 350, width: "38vw", overflow: "auto" }}
        >
            <Table
                stickyHeader={true}
                sx={{ minWidth: 200 }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell
                            style={headerStyle}
                            className={"matrix-title-" + title}
                            align="left"
                        >
                            Check
                        </TableCell>
                        <TableCell
                            style={headerStyle}
                            className={"matrix-title-" + title}
                        >
                            Title
                        </TableCell>
                        <TableCell
                            style={headerStyle}
                            className={"matrix-title-" + title}
                            align="left"
                        >
                            Deadline
                        </TableCell>
                        <TableCell
                            style={headerStyle}
                            className={"matrix-title-" + title}
                            align="left"
                        >
                            Priority
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody className={"matrix-content matrix-content-" + title}>
                    {tableList.map((row) => (
                        <MatrixTodo
                            makeRefresh={makeRefresh}
                            data={row}
                            key={row.id}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
