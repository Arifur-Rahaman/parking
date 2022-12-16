import axios from "axios"
import { createContext, useReducer } from "react"
import { getErrorMessage } from "../utils/getErrorMessage"
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const URL = `${process.env.REACT_APP_API_URL}/api/users`
    const savedUser = JSON.parse(localStorage.getItem('parkingUser'))
    const navigate = useNavigate()
    const initialState = {
        user: savedUser || null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: ''
    }
    function reducer(state, action) {
        switch (action.type) {
            case "fetching":
                return {
                    ...state,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    error: '',
                    user: null
                }
            case "success":
                return {
                    ...state,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    error: '',
                    user: action.payload,
                }
            case "error":
                return {
                    ...state,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                    error: action.payload,
                    user: null,
                }
            default:
                return state
        }

    }

    const [authState, authDispatch] = useReducer(reducer, initialState)

    async function handleAuthDataSubmit(formData, page) {
        authDispatch({ type: 'fetching' })
        try {
            const { data } = await axios.post(`${URL}/${page}`, formData)
            if (data) {
                localStorage.setItem('parkingUser', JSON.stringify(data))
                authDispatch({ type: 'success', payload: data })
                toast.success(`${page} successfully`)
                navigate('/driver')
            }
        } catch (error) {
            const message = getErrorMessage(error)
            authDispatch({ type: 'error', payload: message })
            toast.error(message)
        }
    }
    return <authContext.Provider
        value={{
            authState,
            handleAuthDataSubmit,
        }}
    >
        {children}
    </authContext.Provider>
}

export default AuthProvider