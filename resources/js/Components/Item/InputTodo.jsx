import * as React from "react";
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
import dayjs from "dayjs";

export default function InputTodo({
    makeRefresh,
    handleClose,
    _data,
    setTableList,
}) {
    const { data, setData, patch, processing, errors, reset } = useForm(_data);
    const [selectedDate, setSelectedDate] = useState(
        dayjs(new Date(_data.deadline * 1000))
    );
    const submit = (e) => {
        e.preventDefault();
        // data.deadline = new Date(data.deadline * 1000);
        patch(route("item.edit"));
        if (
            data.title == null ||
            data.deadline == null ||
            data.priority == null ||
            data.description == null
        ) {
        } else {
            //상위에서는 new Date()로 갖고있다가 테이블 넣을 시 getTime / 1000이 되어버림
            //여기선 /1000으로 관리함/
        }
        console.log("REFRESH");
        makeRefresh();
        setTableList(_data, data);
        handleClose();
    };

    return (
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
                        <InputError message={errors.title} className="mt-0" />
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
                        Edit
                    </PrimaryButton>
                </div>
            </form>
        </Box>
    );
}
