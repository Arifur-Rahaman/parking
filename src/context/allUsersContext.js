import { createContext, useState} from "react";

const allUsersContext = createContext();
export const AllUsersProvider = ({children})=>{
    const [allUsers, setAllUsers] = useState([])
    return(
        <allUsersContext.Provider
            value={{
                allUsers,
                setAllUsers
            }}
        >
            {children}
        </allUsersContext.Provider>
    )
}
export default allUsersContext;