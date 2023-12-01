import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import OTPInput from "react-otp-input";

const Verification =  () => {
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState('')
    const [seconds, setSeconds] = useState(5)

    const handleOtp = (e) => {
        e.preventDefault()

        setLoading(true)

        setTimeout(() => {
            setLoading(false)

            if(otp) {
                window.location.href = 'https://www.jumia.com.ng/';
            }
        }, 2000);
    }
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
    
      return () => {
        clearInterval(intervalId)
      }
    }, [])
    
    useEffect(() => {
      if(seconds === 0) {
        setSeconds(5)
      }
    }, [seconds])
    

    return (
        <div className="flex flex-col my-0 mx-auto w-[480px] max-w-full min-h-[500px]">
            <Header />
            {loading && 
                <div id="loading-container" className="h-1 w-full bg-gray-300 relative overflow-hidden">
                    <div id="loading-bar" className="h-1 bg-orange-400 absolute animate-loading-bar w-[50%]"></div>
                </div>
            } 
            
            <div id="card" className="py-2 px-6 mb-20">
                <form method="post" onSubmit={(e) => handleOtp(e, otp)}>
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center">
                            <h2 className="text-xl font-medium">Verification Code!</h2>
                            <p className="mt-2 mb-4 text-center text-neutral-600">We have sent a verification code to youremailaddress@mail.com</p>
                        </div>
                        <OTPInput
                            id="otpInput"
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span> </span>}
                            renderInput={(props) => <input {...props} />}
                            shouldAutoFocus
                            containerStyle={{
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                            }}
                            inputStyle={{
                                width: '4rem',
                                height: '3rem',
                                margin: '0 .5rem',
                                fontSize: '2rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                outlineColor: 'rgb(251, 146, 60)'
                            }}
                        />
                        <div id="actions" className="mt-4">
                            <div id="action-btn-wrapper">
                            <button type="submit" className="h-12 w-full bg-orange-400 rounded">
                                <span className="text-white text-base font-bold tracking-widest">Submit</span>
                            </button>
                            </div>
                        </div>                   
                    </div>
                </form>

                <div className="my-4">
                    <p className="text-center">Didn&apos;t receive the verification code? It could take a bit of time, request a new code in <span className="text-orange-400">{seconds} seconds</span></p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Verification;