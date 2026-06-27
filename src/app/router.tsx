import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../features/authentication/components/login"
import { Dashboard } from "../features/dashboard/components"
import { Job } from "../features/job"
import { VehicleList } from "../features/vehicle-list"
import Protected from "../middleware/PrivateRoute"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route element={<Protected />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/job" element={<Job />} />
                    <Route path="/vehicle-lists" element={<VehicleList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
