import { createContext } from "react";
import api from "../service/api";
import { useDispatch } from "react-redux";

interface ContextProviderProps {
    children: React.ReactNode;
}

interface CompanyContextProps {
    getCompany: () => void;
}

export const CompanyContext = createContext<CompanyContextProps>({} as CompanyContextProps);

export const CompanyProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const dispatch = useDispatch();

    const getCompany = () => {
        try {
            api.get("/companies", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('@bus_token')}`
                }
            }).then((res) => {
                dispatch({ type: 'company/setCompany', payload: res.data });
            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <CompanyContext.Provider value={{getCompany}}>
            {children}
        </CompanyContext.Provider>
    )
}