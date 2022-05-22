import { createContext, useState} from "react";

const userContext = createContext();
export const UserProvider = ({children})=>{
    const [profileInfo, setProfileInfo] = useState({})
    return(
        <userContext.Provider
            value={{
                profileInfo,
                setProfileInfo
            }}
        >
            {children}
        </userContext.Provider>
    )
}
export default userContext;