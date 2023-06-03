import { Button, Stack } from "@mui/material";

export default function Sidebar() {
    return (
        <Stack direction="column" className="sidebar">
            <Button> Matrix</Button>
            <Button> List</Button>
            <Button> Setting</Button>
            <h1> r1</h1>
            <h1> r2</h1>
            <h1> r3</h1>
        </Stack>
    );
}
