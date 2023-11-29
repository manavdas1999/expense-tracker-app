import {useEffect, useState } from "react"
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";


const LoginPage = () => {


    const [showLogin, setShowLogin] = useState(true);


    const onScreenStateChange = (value) => {
        setShowLogin(value);
    }

    return <div className="">
        {
            showLogin ?
                <LoginComponent changeScreenHandler={onScreenStateChange} /> :
                <RegisterComponent changeScreenHandler={onScreenStateChange} />
        }


    </div>
}

export default LoginPage;



























