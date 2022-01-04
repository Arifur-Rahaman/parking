
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SigninModal.css'

const SigninModal = (props) => {
    const closeModal = props.setModalOpen
    const [isRegistered, setIsRegistered] = useState(true)
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="top">
                    <div className="login">
                        <button onClick={()=>setIsRegistered(true) }>Login</button>
                    </div>
                    <div className="registration">
                        <button onClick={()=>setIsRegistered(false)}>Registration</button>
                    </div>
                </div>
                {
                    isRegistered&&
                    <div className="form-container">
                    <form action="">
                        <input type="text" placeholder="Email*" />
                        <br/>
                        <input type="password" placeholder="Password*"/>
                        <br/>
                        <Link to="driver"><button>Login</button></Link>
                        <p>Forget Password</p>
                        <button onClick={closeModal}>Close</button>
                    </form>
                </div>
                }
                {
                    !isRegistered&&
                    <div className="form-container">
                    This is Reg.
                    </div>
                }
            </div>
        </div>
    );
};

export default SigninModal;