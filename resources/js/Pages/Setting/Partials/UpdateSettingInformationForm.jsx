import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import FixedPriority from "@/Components/Setting/FixedPriority";
import EndPriority from "@/Components/Setting/EndPriority";
import { Stack } from "@mui/material";
import DaySlider from "./DaySlider";
export default function UpdateSettingInformationForm({
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;
    
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            id: user.id,
            important_priority_range: user.important_priority_range,
            important_hour_range: user.important_hour_range,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route("setting.update"));
    };

    return (
        <Stack className={className} direction="column">
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Setting Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your service's setting information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="priority"
                        value="Important Priority Range"
                    />
                    <p className="mt-1 text-sm text-gray-600">
                        Set Important Priority Range for your service.
                    </p>
                    <Stack
                        spacing={3}
                        direction="row"
                        alignItems="center"
                        className="mt-1"
                        marginTop={3}
                        marginBottom={3}
                    >
                        <FixedPriority />
                        <p>~</p>
                        <EndPriority data={data} setData={setData} />
                        <InputError className="mt-2" message={errors.name} />
                    </Stack>
                </div>
                <div>
                    <InputLabel htmlFor="hour" value="Urgent Date Range" />
                    <p className="mt-1 text-sm text-gray-600">
                        Set Urgent Date Range for your service.
                    </p>
                    <DaySlider data={data} setData={setData} />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </Stack>
    );
}
