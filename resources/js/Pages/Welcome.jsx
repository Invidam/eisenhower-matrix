import Sidebar from "@/Components/Sidebar";
import { Link, Head } from "@inertiajs/react";
import { Stack, Typography } from "@mui/material";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("list")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Open
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <Stack direction="column" className="dashboard">
                        <img src="/logo.png" width="140px" alt="logo" />

                        <Typography
                            style={{ marginTop: "40px" }}
                            variant="h3"
                            component="div"
                            fontWeight="bold"
                        >
                            Todo Matrix
                        </Typography>
                        <Typography
                            variant="h4"
                            style={{ marginTop: "40px" }}
                            color="text.secondary"
                        >
                            Plan Your Todo Tasks with the EisenHour Matrix
                        </Typography>
                        <Typography
                            variant="body1"
                            style={{ fontSize: "24px", marginTop: "50px" }}
                            color="text.secondary"
                        >
                            Todo Matrix is a powerful tool designed to
                            revolutionize the way you manage your tasks and
                            enhance your productivity. Based on the renowned
                            EisenHour Matrix, this service provides a
                            comprehensive framework for organizing your to-do
                            list and prioritizing your tasks effectively.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "24px", marginTop: "70px" }}
                        >
                            Visit:{" "}
                            <a
                                href="https://github.com/Invidam/eisenhower-matrix"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                }}
                            >
                                https://github.com/Invidam/eisenhower-matrix
                            </a>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "24px", marginTop: "15px" }}
                        >
                            Reference:{" "}
                            <a
                                href="https://github.com/Invidam/eisenhower-matrix"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                }}
                            >
                                https://www.eisenhower.me/eisenhower-matrix/
                            </a>
                        </Typography>
                    </Stack>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
