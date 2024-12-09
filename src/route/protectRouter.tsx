import { Navigate, Outlet } from "react-router"


export const ProtectRouter: React.FC = () => {
        const token = localStorage.getItem('@bus_token')
        return token ? <Outlet /> : <Navigate to="/login" />
}