import { createContext, useState} from "react";

const parkOwnerContext = createContext();
export const OwnerInfoProvider = ({children})=>{
    const [ownerInfo, setOwnerInfo] = useState({})
    return(
        <parkOwnerContext.Provider
            value={{
                ownerInfo,
                setOwnerInfo
            }}
        >
            {children}
        </parkOwnerContext.Provider>
    )
}
export default parkOwnerContext;