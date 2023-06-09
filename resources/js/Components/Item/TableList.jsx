import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
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
import ApiFetch from "@/classes/ApiFetch";
import SortingButton from "./SortingButton";
import Item from "./Item";

export default function TableList() {
    const [tableList, setTableList] = useState([]);
    const [deadlineSortDirection, setDeadlineSortDirection] = useState("desc");
    const [prioritySortDirection, setPrioritySortDirection] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [checkRefresh, setCheckRefresh] = useState(0);

    const toggleSortBtn = (sortType, sortDirection, setSortDirection) => {
        let newSortDirection;
        newSortDirection = sortDirection === "asc" ? "desc" : "asc";

        setSortDirection(newSortDirection);
    };
    const makeRefresh = () => setCheckRefresh(checkRefresh + 1);

    const tableRefresh = (befData, data) => {
        const index = tableList.indexOf(befData);
        tableList[index] = data;
        setTableList(tableList);
    };

    const toggleDeadline = () => {
        setPrioritySortDirection("");
        toggleSortBtn(
            "deadline",
            deadlineSortDirection,
            setDeadlineSortDirection
        );
    };

    const togglePriority = () => {
        setDeadlineSortDirection("");
        toggleSortBtn(
            "priority",
            prioritySortDirection,
            setPrioritySortDirection
        );
    };

    useEffect(() => {
        const params =
            deadlineSortDirection === ""
                ? {
                      sort_type: "priority",
                      sort_direction: prioritySortDirection,
                  }
                : {
                      sort_type: "deadline",
                      sort_direction: deadlineSortDirection,
                  };
        ApiFetch.get("/items", { params }).then((res) => {
            setTableList(res.data);
        });
    }, [deadlineSortDirection, prioritySortDirection, checkRefresh]);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        deadline: null,
        priority: null,
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("item.create"));
        if (
            data.title == "" ||
            data.deadline == "" ||
            data.priority == null ||
            data.description == null
        ) {
        } else {
            data.deadline = data.deadline.getTime() / 1000;

            setTableList([...tableList, data]);
        }
        reset("title", "deadline", "priority", "description");
        setSelectedDate(null);
    };

    return (
        <Stack direction="column" sx={{ alignItems: "center" }}>
            <TableContainer
                sx={{ height: 350, width: "85ch" }}
                component={Paper}
            >
                <Table
                    stickyHeader={true}
                    sx={{ minWidth: 200 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Check</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">
                                Deadline
                                <SortingButton
                                    sortDirection={deadlineSortDirection}
                                    setSortDirection={toggleDeadline}
                                ></SortingButton>
                            </TableCell>
                            <TableCell align="left">
                                Priority
                                <SortingButton
                                    sortDirection={prioritySortDirection}
                                    setSortDirection={togglePriority}
                                ></SortingButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {tableList.map((row) => (
                            <Item
                                data={row}
                                key={row.id}
                                makeRefresh={makeRefresh}
                                setTableList={tableRefresh}
                            />
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
                    <Stack direction="row" sx={{ height: "12ch" }}>
                        <Stack direction="column">
                            <Title data={data} setData={setData} />
                            <InputError
                                message={errors.title}
                                className="mt-0"
                            />
                        </Stack>
                        <Stack direction="column">
                            <Priority data={data} setData={setData} />
                            <InputError
                                message={errors.priority}
                                className="mt-0"
                            />
                        </Stack>
                        <Stack direction="column">
                            <DatePick
                                data={data}
                                setData={setData}
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate}
                            />
                            <InputError
                                message={errors.deadline}
                                className="mt-0"
                            />
                        </Stack>
                    </Stack>
                    <Description data={data} setData={setData} />
                    <InputError message={errors.description} className="mt-0" />

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
