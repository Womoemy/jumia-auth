import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const SignIn =  () => {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const location = useLocation()
    const email = location.state && location.state.email

    const navigate = useNavigate()

    const isPasswordValid = (password) => {
        const passswordRegex = /^.{4,}$/; 
        return passswordRegex.test(password);
    }
    const handlePassword = (e) => {
        e.preventDefault()

        setLoading(true)

        setTimeout(() => {
            setLoading(false)

            if(isPasswordValid(password)) {
                navigate('/home')
            }
        }, 2000);
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((currentState) => !currentState)
    } 

    return (
        <div className="flex flex-col my-0 mx-auto w-[480px] max-w-full min-h-[500px]">
            <Header />
            {loading && 
                <div id="loading-container" className="h-1 w-full bg-gray-300 relative overflow-hidden">
                    <div id="loading-bar" className="h-1 bg-orange-400 absolute animate-loading-bar w-[50%]"></div>
                </div>
            } 
            
            <div id="card" className="py-2 px-6">
                <form method="post" onSubmit={(e) => handlePassword(e, password)}>
                    <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-medium">Welcome back!</h2>
                        <p className="mt-2 mb-4 text-center text-neutral-600">Log back into your Jumia account.</p>
                    </div>
                    <div id="identity-container" className="mt-8 mb-4 p-4 bg-gray-200 flex justify-between">
                        <div id="identifier">
                            {email}
                        </div>
                        <div className="text-orange-400">
                            <Link to={"/"}>Edit</Link>
                        </div>
                    </div>
                    <div id="fields" className="pt-4">
                        <div className="relative flex">
                            <input 
                                type={isPasswordVisible ? "text" : "password"} 
                                name="password_input" 
                                id="password_input" 
                                className="h-14 peer border px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400" 
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <label htmlFor="email_input" className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5">
                                Password
                            </label>
                            <button 
                                className="absolute inset-y-0 right-0 flex items-center px-4"
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </button>
                        </div>
                        <div id="helper-text-line" className="px-4 h-5">
                        <div id="helper-text">
                            <span className="hidden text-xs text-red-700 tracking-wide" id="err-msg">Either the email or the phone number entered is not valid</span>
                        </div>
                        </div>
                    </div>
                    <div id="actions" className="mt-4">
                        <div id="action-btn-wrapper">
                        <button type="submit" className="h-12 w-full bg-orange-400 rounded">
                            <span className="text-white text-base font-bold tracking-widest">Login</span>
                        </button>
                        </div>
                    </div>
                    
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}
export default SignIn;