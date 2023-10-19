import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Identification = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const isEmailValid = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        return emailRegex.test(email)
    }

    const handleValidation = (email) => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)

            if(isEmailValid(email)) {
                navigate('/sign-in')
            }
        }, 2000);
    }
    return (
        <>
            {loading && 
                <div id="loading-container" className="h-1 w-full bg-gray-300 relative overflow-hidden">
                    <div id="loading-bar" className="h-1 bg-orange-400 absolute animate-loading-bar w-[50%]"></div>
                </div>
            }
            
            <div id="card" className="py-2 px-6">
                <form method="post">
                    <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-medium">Welcome to Jumia</h2>
                        <p className="mt-2 mb-4 text-center text-neutral-600">Type your e-mail or phone number to log in or create a Jumia account.</p>
                    </div>
                    <div id="fields">
                        <div className="relative">
                        <input 
                            type="email" 
                            name="email_input" 
                            id="email_input" 
                            className="h-14 peer border px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400" 
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <label htmlFor="email_input" className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5">Email or Mobile Number*</label>
                        </div>
                        <div id="helper-text-line" className="px-4 h-5">
                        <div id="helper-text">
                            <span className="hidden text-xs text-red-700 tracking-wide" id="err-msg">Either the email or the phone number entered is not valid</span>
                        </div>
                        </div>
                    </div>
                    <div id="actions" className="mt-4">
                        <div id="action-btn-wrapper">
                        <button onClick={handleValidation} type="submit" className="h-12 w-full bg-orange-400 rounded">
                            <span className="text-white text-base font-bold tracking-widest">Continue</span>
                        </button>
                        </div>
                    </div>
                    <div id="social-logins" className="mt-16">
                        <div id="action-btn-wrapper">
                        <button type="submit" className="h-12 w-full bg-blue-600 rounded text-white font-semibold tracking-widest flex items-center p-3 justify-between mb-4">
                            <FacebookIcon />
                            <span className="grow">Log in with Facebook</span>
                        </button>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Identification;