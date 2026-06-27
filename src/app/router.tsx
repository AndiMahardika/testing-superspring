import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../features/authentication/components/login"
import { Dashboard } from "../features/dashboard/components"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}
