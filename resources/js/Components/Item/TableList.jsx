import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import Priority from "./Priority";
import DatePick from "./DatePick";
import Description from "./Description";
import Title from "./Title";
import { Stack } from "@mui/material";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";
import { useEffect } from "react";
function createData(title, date, priority, description) {
    return { title, date, priority, description };
}

const rows = [
    createData("Frozen yoghurt", new Date("2022-06-04"), 3, "my first"),
    createData("FroIceBearzen ", new Date("2022-06-05"), 1, "my two"),
    createData("AMape yoghurt", new Date("2022-06-06"), 4, "my three"),
    createData("Do homework", new Date("2022-06-07"), 2, "my four"),
];

export default function TableList() {
    const [tableList, setTableList] = useState(rows);
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        date: null,
        priority: null,
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();
        
        post(route("item.create"));

        setTableList([...tableList, data]);
        console.log(tableList);
    };

    return (
        <Stack direction="column" sx={{ alignItems: "center" }}>
            <TableContainer sx={{ height: 450 }} component={Paper}>
                <Table
                    stickyHeader={true}
                    sx={{ minWidth: 200 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Check</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Priority</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {tableList.map((row, idx) => (
                            <TableRow
                                key={idx}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>V</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    component="th"
                                    scope="row"
                                >
                                    {row.date.toDateString()}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    component="th"
                                    scope="row"
                                >
                                    {row.priority}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                sx={{
                    width: "70ch",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    marginTop: "1rem",
                    borderRadius: "1rem",
                    padding: "1rem",
                }}
            >
                <form onSubmit={submit}>
                    <Stack direction="row">
                        <Title data={data} setData={setData} />

                        <InputError message={errors.name} className="mt-2" />
                        <Priority data={data} setData={setData} />

                        <InputError message={errors.name} className="mt-2" />
                        <DatePick data={data} setData={setData} />
                    </Stack>
                    <Description data={data} setData={setData} />
                    <InputError message={errors.description} className="mt-2" />

                    <div className="flex mt-4">
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Add
                        </PrimaryButton>
                    </div>
                </form>
            </Box>
        </Stack>
    );
}
