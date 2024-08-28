// AppContext.tsx
import { createContext, useState, ReactNode, FC } from 'react'

// Define the type for the context value
interface AppContextType {
    isLogin: boolean
    setIsLogin: (isLogin: boolean) => void
    onLogout: () => void
    onSaveToLocalStorage: (user: string) => void
}

// Create the context with a default value
export const AppContext = createContext<AppContextType | undefined>(undefined)

// Define the props for the provider component
interface AppContextProviderProps {
    children: ReactNode
}

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const onLogout = () => {
        setIsLogin(false)
    }

    const onSaveToLocalStorage = (user: string) => {
        localStorage.setItem('user', user)
    }

    return (
        <AppContext.Provider
            value={{ isLogin, setIsLogin, onLogout, onSaveToLocalStorage }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
