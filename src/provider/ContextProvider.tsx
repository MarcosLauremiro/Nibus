import { AuthProvider } from "./AuthContext";

interface ContextProviderProps {
    children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
};