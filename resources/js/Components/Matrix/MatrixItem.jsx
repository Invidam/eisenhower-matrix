import * as React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import ItemList from "./ItemList";

export default function MatrixItem({ setCheckRefresh, item, title, list }) {
    //style that line-through if item.is_done == true
    

    return (
        <Box key={item.id} item xs={2} sm={6} md={3} lg={12}>
            <Card className={"matrix-" + title}>
                <CardContent sx={{ m: 1, width: "100%" }}>
                    <Typography variant="h5" component="div" fontWeight="bold">
                        {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {item.content}
                    </Typography>
                    <Typography
                        className={"matrix-title matrix-" + title}
                        sx={{
                            display: "block",
                            height: "250px",
                            backgroundColor: "#e0e0e0",
                            margin: "3px 5px 0px 0px",
                        }}
                    >
                        <ItemList
                            setCheckRefresh={setCheckRefresh}
                            tableList={list}
                            title={title}
                        />
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
