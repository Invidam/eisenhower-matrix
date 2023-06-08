import TableList from "@/Components/Item/TableList";
import MatrixItem from "@/Components/Matrix/MatrixItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ApiFetch from "@/classes/ApiFetch";
import { Head, usePage } from "@inertiajs/react";
import { Grid, Card, CardContent, Typography, Stack, Box } from "@mui/material";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";

const data = [
    { id: 1, title: "Do", content: "Do it now" },
    { id: 2, title: "Schedule", content: "a time to do it" },
    { id: 3, title: "Delegate", content: "it to someone else" },
    { id: 4, title: "Delete", content: "Eliminate It" },
];

export default function EmptyMatrix() {
    const [doList, setDoList] = useState([]);
    const [scheduleList, setScheduleList] = useState([]);
    const [delegateList, setDelegateList] = useState([]);
    const [deleteList, setDeleteList] = useState([]);

    const [checkRefresh, setCheckRefresh] = useState(0);

    const makeRefresh = () => setCheckRefresh(checkRefresh + 1);
    return (
        <Stack direction="column" sx={{ padding: "3ch" }}>
            <Grid container spacing={5} justifyContent="flex-start">
                <Box
                    sx={{
                        m: 1,
                        width: "10vw",
                        height: "6vh",

                        padding: "0px",
                    }}
                ></Box>
                <Box
                    sx={{
                        m: 1,
                        width: "40vw",
                        height: "6vh",

                        padding: "0px",
                    }}
                    className="matrix-box"
                >
                    <p className="matrix-block matrix-block">Urgent</p>
                </Box>
                <Box
                    sx={{
                        m: 1,
                        width: "40vw",
                        height: "6vh",

                        padding: "0px",
                    }}
                    className="matrix-box"
                >
                    <p className="matrix-block matrix-block">Not Urgent</p>
                </Box>
                <Box
                    sx={{
                        m: 1,
                        width: "10vw",
                        height: "37.5vh",

                        padding: "0px",
                    }}
                    className="matrix-box matrix-box-vertical"
                >
                    <p className="matrix-block matrix-block-vertical">
                        Important
                    </p>
                </Box>
                <Box
                    sx={{
                        m: 1,
                        width: "40vw",
                        height: "37.5vh",

                        padding: "0px",
                    }}
                >
                    <MatrixItem
                        setCheckRefresh={makeRefresh}
                        key={data[0].id}
                        item={data[0]}
                        title={"do"}
                        list={doList}
                    />
                </Box>
                <Box
                    sx={{
                        m: 1,
                        width: "40vw",
                        height: "32vh",
                        padding: "0px",
                    }}
                >
                    <MatrixItem
                        setCheckRefresh={makeRefresh}
                        key={data[1].id}
                        item={data[1]}
                        title={"schedule"}
                        list={scheduleList}
                    />
                </Box>
                <Box
                    sx={{
                        m: 1,
                        width: "10vw",
                        height: "32vh",

                        padding: "0px",
                    }}
                    className="matrix-box matrix-box-vertical"
                >
                    <p className="matrix-block matrix-block-vertical">
                        Not Important
                    </p>
                </Box>
                <Box
                    sx={{
                        m: 1,
                        width: "40vw",
                        height: "32vh",

                        padding: "0px",
                        marginTop: "15px",
                    }}
                >
                    <MatrixItem
                        setCheckRefresh={makeRefresh}
                        key={data[2].id}
                        item={data[2]}
                        title={"delegate"}
                        list={delegateList}
                    />
                </Box>
                <Box
                    sx={{
                        m: 1,
                        width: "40vw",
                        height: "32vh",

                        padding: "0px",
                        marginTop: "15px",
                    }}
                >
                    <MatrixItem
                        setCheckRefresh={makeRefresh}
                        key={data[3].id}
                        item={data[3]}
                        title={"delete"}
                        list={deleteList}
                    />
                </Box>
            </Grid>
        </Stack>
    );
}
