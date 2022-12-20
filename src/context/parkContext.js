import { createContext, useReducer} from "react";
import { actions } from "../const/actions";

export const parkContext = createContext();

export const ParkProvider = ({children})=>{

    const initialState = {
        parks: [],
    }
    function reducer(state, action){
        switch (action.type) {
            case actions.SET_PARKS:
                return {
                    ...state,
                    parks: action.payload,
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