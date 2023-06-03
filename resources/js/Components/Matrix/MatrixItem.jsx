import * as React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

export default function MatrixItem({ item, title }) {
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
                        sx={{
                            display: "block",
                            height: "250px",
                            backgroundColor: "#e0e0e0",
                            margin: "3px 5px 0px 0px",
                        }}
                    >
                        content
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
