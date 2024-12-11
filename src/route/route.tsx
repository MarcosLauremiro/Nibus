import React from "react"
import { Route, Routes } from "react-router"
import { Register } from "../pages/Register"
import { LoginPage } from "../pages/Login"
import { LayoutComponent } from "../components/layout"
import { DashboardPage } from "../pages/Dashboard"

export const RouterMain: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<LayoutComponent><DashboardPage /> </LayoutComponent>} />
        </Routes>
    )
}