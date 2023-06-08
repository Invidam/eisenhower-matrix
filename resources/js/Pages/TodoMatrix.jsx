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

export default function TodoMatrix({ auth }) {
    const [doList, setDoList] = useState([]);
    const [scheduleList, setScheduleList] = useState([]);
    const [delegateList, setDelegateList] = useState([]);
    const [deleteList, setDeleteList] = useState([]);

    const user = usePage().props.auth.user;

    const item = {
        id: null,
        is_done: null,
        title: null,
        deadline: null,
        priority: null,
        description: null,
    };
    const getMatrixType = (item) => {
        const isUrgent =
            new Date(item.deadline * 1000) - new Date() <
            user.important_hour_range * 60 * 60 * 1000;
        const isImportant = item.priority <= user.important_priority_range;
        if (isUrgent && isImportant) {
            return "Do";
        } else if (isUrgent && !isImportant) {
            return "Delegate";
        } else if (!isUrgent && isImportant) {
            return "Schedule";
        } else {
            return "Delete";
        }
    };
    const updateMatrix = (itemList) => {
        setDoList([]);
        setScheduleList([]);
        setDelegateList([]);
        setDeleteList([]);

        itemList.forEach((item) => {
            switch (getMatrixType(item)) {
                case "Do":
                    setDoList((doList) => [...doList, item]);
                    break;
                case "Schedule":
                    setScheduleList((scheduleList) => [...scheduleList, item]);
                    break;
                case "Delegate":
                    setDelegateList((delegateList) => [...delegateList, item]);
                    break;
                case "Delete":
                    setDeleteList((deleteList) => [...deleteList, item]);
                    break;
            }
        });

        console.log("doList: ", doList);
        console.log("scheduleList: ", scheduleList);
        console.log("delegateList: ", delegateList);
        console.log("deleteList: ", deleteList);
    };

    const [checkRefresh, setCheckRefresh] = useState(0);

    const makeRefresh = () => setCheckRefresh(checkRefresh + 1);
    useEffect(() => {
        const params = {
            sort_type: "deadline",
            sort_direction: "asc",
        };
        ApiFetch.get("/items", { params }).then((res) => {
            updateMatrix(res.data);
        });
    }, [checkRefresh]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Matrix
                </h2>
            }
        >
            <Head title="Matrix" />
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
                            makeRefresh={makeRefresh}
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
                            makeRefresh={makeRefresh}
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
                            makeRefresh={makeRefresh}
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
                            makeRefresh={makeRefresh}
                            key={data[3].id}
                            item={data[3]}
                            title={"delete"}
                            list={deleteList}
                        />
                    </Box>
                </Grid>
            </Stack>
        </AuthenticatedLayout>
    );
}
