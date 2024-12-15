import { createContext } from "react";
import { useNavigate } from "react-router";
import api from "../service/api";
import { message } from "antd";

export interface AutphProps {
    children: React.ReactNode;
}

export interface AuthContextProps {
    login: (values: any) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<AutphProps> = ({ children }) => {
    const navigate = useNavigate();

    const login = (values: any) => {
        try {
            api.post("/auth", values).then((res) => {
                message.success('Login realizado com sucesso!');
                localStorage.setItem('@bus_token', res.data.acessToken);
                navigate("/dashboard");
            }).catch((err) => {
                message.error("Erro ao realizar login");
                message.error("Verifique suas credenciais");
                console.log(err)
            })} 
            catch (error) {
                message.error("Erro ao realizar login");
                message.error("Verifique suas credenciais");
                console.log(error)
            }
    }

    const logout = () => {
        localStorage.removeItem('@bus_token');
        message.success('Logout realizado com sucesso!');
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}