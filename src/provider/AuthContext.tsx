import { createContext } from "react";
import { useNavigate } from "react-router";
import api from "../service/api";
import { message } from "antd";
import { useDispatch } from "react-redux";

interface AutphProps {
    children: React.ReactNode;
}

interface AuthContextProps {
    login: (values: any) => void;
    logout: () => void;
    loginSession: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<AutphProps> = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            })
        }
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

    const loginSession = () => {
        try {
            api.get("/auth/session", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('@bus_token')}`
                }
            }).then((res) => {
                dispatch({ type: 'user/setUser', payload: res.data });
            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ login, logout, loginSession }}>
            {children}
        </AuthContext.Provider>
    )
}