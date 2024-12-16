import { AuthProvider } from "./AuthContext";
import { CompanyProvider } from "./CompanyContext";

interface ContextProviderProps {
    children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    return (
        <AuthProvider>
            <CompanyProvider>
                {children}
            </CompanyProvider>
        </AuthProvider>
    )
};