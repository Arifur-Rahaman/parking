import { createContext, useReducer} from "react";

export const parkContext = createContext();

export const ParkProvider = ({children})=>{

    const initialState = {
        parks: [],
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: ''
    }
    function reducer(state, action){
        switch (action.type) {
            case "fetching":
                return {
                    ...state,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    error: '',
                    parks: []
                }
            case "success":
                return {
                    ...state,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    error: '',
                    parks: action.payload,
                }
            case "error":
                return {
                    ...state,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                    error: action.payload,
                    parks: [],
                }
            default:
                return state
        }
    }
    const [parkState, dispatchPark] = useReducer(reducer, initialState)
    return(
        <parkContext.Provider
            value={{
                parkState,
                dispatchPark,
            }}
        >
            {children}
        </parkContext.Provider>
    )
}
export default ParkProvider;