import TableList from "@/Components/Item/TableList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Stack } from "@mui/material";

export default function TodoList({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List
                </h2>
            }
        >
            <Head title="List" />
            <Stack direction="column" className="dashboard">
                <div className="py-12 content">
                    <TableList />
                    {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                You're logged in!
                            </div>
                        </div> 
                    </div>*/}
                </div>
            </Stack>
        </AuthenticatedLayout>
    );
}
