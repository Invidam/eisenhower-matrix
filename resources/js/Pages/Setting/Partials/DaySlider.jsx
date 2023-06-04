import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `${value}h`;
}

const marks = [
    {
        value: 0,
        label: "0d",
    },
    {
        value: 3,
        label: "3d",
    },
    {
        value: 7,
        label: "7d",
    },
    {
        value: 15,
        label: "15d",
    },
    {
        value: 31,
        label: "31d",
    },
];
const minDistance = 3;

export default function DaySlider({ data, setData }) {
    const [value1, setValue1] = React.useState([
        0,
        data.important_hour_range / 24,
    ]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 1) {
            setValue1([
                value1[0],
                Math.max(newValue[1], value1[0] + minDistance),
            ]);

            setData("important_hour_range", (newValue[1] - value1[0]) * 24);
        }
    };

    return (
        <Box sx={{ width: 300, marginLeft: 2, marginTop: 7 }}>
            <Slider
                getAriaLabel={() => "Minimum distance"}
                value={value1}
                onChange={handleChange1}
                getAriaValueText={valuetext}
                disableSwap
                max={31}
                step={1}
                marks={marks}
                valueLabelDisplay="on"
            />
        </Box>
    );
}
