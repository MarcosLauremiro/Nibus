import React from "react";
import { Route, Routes } from "react-router";
import { Register } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { LayoutComponent } from "../components/layout";
import { DashboardPage } from "../pages/Dashboard";
import { ProtectRouter } from "./protectRouter";

export const RouterMain: React.FC = () => {
    return (
        <Routes>
            {/* Rota pública */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />

            {/* Rota protegida */}
            <Route element={<ProtectRouter />}>
                <Route 
                    path="/dashboard" 
                    element={
                        <LayoutComponent>
                            <DashboardPage />
                        </LayoutComponent>
                    } 
                />
            </Route>
        </Routes>
    );
};
