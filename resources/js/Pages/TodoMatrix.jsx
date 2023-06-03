import TableList from "@/Components/Item/TableList";
import MatrixItem from "@/Components/Matrix/MatrixItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Grid, Card, CardContent, Typography, Stack, Box } from "@mui/material";
import Container from "@mui/material/Container";

export default function TodoMatrix({ auth }) {
    const data = [
        { id: 1, title: "Do", content: "Do it now" },
        { id: 2, title: "Schedule", content: "a time to do it" },
        { id: 3, title: "Delegate", content: "it to someone else" },
        { id: 4, title: "Delete", content: "Eliminate It" },
    ];

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
                        <text className="matrix-block matrix-block">
                            Urgent
                        </text>
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
                        <text className="matrix-block matrix-block">
                            Important
                        </text>
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
                        <text className="matrix-block matrix-block-vertical">
                            Important
                        </text>
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
                            key={data[0].id}
                            item={data[0]}
                            title={"do"}
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
                            key={data[1].id}
                            item={data[1]}
                            title={"schedule"}
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
                        <text className="matrix-block matrix-block-vertical">
                            Not Important
                        </text>
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
                            key={data[2].id}
                            item={data[2]}
                            title={"delegate"}
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
                            key={data[3].id}
                            item={data[3]}
                            title={"delete"}
                        />
                    </Box>
                </Grid>
            </Stack>
        </AuthenticatedLayout>
    );
}
