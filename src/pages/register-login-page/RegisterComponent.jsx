import React, { useReducer , useState} from 'react';
import { auth } from '../../services/firebase';
import InputWithIcons from '../../components/InputWithIcons';
import SvgIcon from "../../components/SvgIcon";
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Initial state for the reducer
const initialState = {
    username: '',
    email: '',
    password: '',
    phone: '',
    error: '',
    successMessage: '',
};

// Reducer function to handle state changes
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'SET_ERROR':
            return { ...state, error: action.error, successMessage: '' };
        case 'SET_SUCCESS_MESSAGE':
            return { ...state, successMessage: action.message, error: '' };
        default:
            return state;
    }
};




const RegisterComponent = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisiblity = () => {
        setShowPassword(!showPassword);
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: 'SET_FIELD',
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple registration validation
        if (!state.username.trim() || !state.email.trim() || !state.password.trim() || !state.phone.trim()) {
            dispatch({ type: 'SET_ERROR', error: 'All fields are required.' });
            return;
        }

        if (state.phone.trim().length < 10) {
            dispatch({ type: 'SET_ERROR', error: 'Invalid phone number.' });
            return;
        }

        if (state.password.trim().length < 8) {
            dispatch({ type: 'SET_ERROR', error: 'Password to small(atleast 8 characters).' });
            return;
        }

        try {
            // Create a new user with Firebase authentication
            const userCredentials = await createUserWithEmailAndPassword(auth, state.email, state.password)
                .then((userCredentials) => {
                    console.log(userCredentials)
                    // If successful, you can redirect the user or perform additional actions

                    dispatch({ type: 'SET_SUCCESS', message: 'Registration successful!' })
                }
                )


        } catch (error) {
            // Handle registration errors
            dispatch({ type: 'SET_ERROR', error: error.message });
        }

    };

    return (
        <div>
            <Card>
                <CardHeading>Create new account.</CardHeading>
                <br />
                <form onSubmit={handleSubmit}>
                    <InputWithIcons
                        leadingIcon={<PersonIcon />}

                        placeholder="Username"
                        name="username"
                        type="text"
                        value={state.username}
                        onChange={handleChange}
                    />
                    <InputWithIcons
                        leadingIcon={<EmailIcon />}

                        placeholder="Email"
                        name="email"
                        type="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <InputWithIcons
                        leadingIcon={<PhoneIcon />}

                        placeholder="Phone"
                        name="phone"
                        type="number"
                        value={state.phone}
                        onChange={handleChange}
                    />
                    <InputWithIcons
                        leadingIcon={<PasswordIcon />}
                        trailingIcon={<button type='button' onClick={togglePasswordVisiblity} >
                            {
                                showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
                        </button>}
                        placeholder="Password"
                        name="password"
                        type="password"

                        value={state.password}
                        onChange={handleChange}
                    />
                    <br/>
                    <BigButton type='submit'>Create Account</BigButton>
                    {state.error && <ErrorText>{state.error}</ErrorText>}
                </form>
            </Card>
            <div className="font-semibold flex justify-center flex-wrap text-neutral-950">
                <p className="text-gray-500 mr-2">Already have an account?</p>
                <button onClick={e => props.changeScreenHandler(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default RegisterComponent;


const ErrorText = (props) => {
    return <div className="text-sm flex items-center text-red-600 mb-1">
        <CrossIcon />
        <div className="ml-1">{props.children}</div>

    </div>
}


const BigButton = ({ type, onClick, children }) =>
    <button type={type} onClick={onClick} className="rounded-lg bg-neutral-950 p-3 text-md text-slate-50">{children}</button>

const CardHeading = (props) => {
    return <h2 className="w-3/4 sm:w-full  text-4xl font-bold ">{props.children}</h2>
}

const Card = (props) => {
    return <div className="w-1/2  m-auto mt-20 mb-8 rounded-xl p-5 shadow-[0_0px_18px_0px_rgba(0,0,0,0.3)]  ">
        {props.children}
    </div>
}




// icons
const CrossIcon = () => <SvgIcon name="cross" className="w-4 h-4 text-red-600 fill-none stroke-[1.5] stroke-current" />

const PersonIcon = () => <SvgIcon name="person" className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400 "
/>

const PhoneIcon = () => <SvgIcon name="phone" className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />

const PasswordIcon = () => <SvgIcon name="password" className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />

const EmailIcon = () => <SvgIcon name="email" className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />

const EyeOpenIcon = () => <SvgIcon name="eye-open" className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />

const EyeCloseIcon = () => <SvgIcon name="eye-close" className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />