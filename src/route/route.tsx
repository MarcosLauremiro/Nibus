import React from "react";
import { Route, Routes } from "react-router";
import { Register } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { LayoutComponent } from "../components/layout";
import { DashboardPage } from "../pages/Dashboard";
import { ProtectRouter } from "./protectRouter";
import { ListCarPage } from "../pages/Car/NewVehicles";
import { ListCte } from "../pages/Documents/ListCTe";

export const RouterMain: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectRouter />}>
                <Route 
                    path="/dashboard" 
                    element={
                        <LayoutComponent>
                            <DashboardPage />
                        </LayoutComponent>
                    } 
                />
                <Route path="/vehicles/new" element={<LayoutComponent><ListCarPage/></LayoutComponent>} />
                <Route path="/listCre" element={<LayoutComponent><ListCte/></LayoutComponent>} />
            </Route>
        </Routes>
    );
};
