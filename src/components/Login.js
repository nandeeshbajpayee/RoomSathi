import { useFirebase } from '../context/firebase';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

function Login() {
    // Define state for storing the OTP sent status
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [mobileNumber, setMobileNumber] = useState('');
    const [confirmObj, setConfirmObj] = useState("")
    const [openCaptcha, setOpenCaptcha] = useState(false);
    const navigate = useNavigate();

    const { setUpRecaptcha } = useFirebase();
    // Function to send OTP
    const sendOTP = async () => {

        if (mobileNumber === "" || mobileNumber === undefined) {
            console.log("please enter valid phone number")
            return;
        }
        try {
            if (!openCaptcha) {
                let response = await setUpRecaptcha(mobileNumber)
                console.log(response);
                setOpenCaptcha(true);
                setConfirmObj(response)
                // console.log(response);
                setOtpSent(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const verifyOtp = async (e) => {
        e.preventDefault();
        if (otp === "" || otp === null) return;
        try {
            await confirmObj.confirm(otp)
            navigate("/profile")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex flex-col h-screen items-center justify-center relative">
            <div className="text-neutral-700 text-2xl absolute top-8 cursor-pointer">
                <Link to="/">
                    <h1>Room<span className="text-orange-400">Sathi</span></h1>
                </Link>
            </div>
            <div className="bg-white p-8 rounded shadow-lg w-80">
                <h2 className="flex justify-center items-center text-xl text-neutral-700  mb-6">
                    {otpSent ? 'Enter OTP' : <div to="/login" className='  text-xl mr-8 text-neutral-700 hover:cursor-pointer'>
                        Login <span className='text-orange-400 text-2xl px-1'>/</span> Register
                    </div>}
                </h2>

                {/* Mobile Number Input (visible if OTP is not sent) */}
                {!otpSent && (<>
                    <div className="mb-4">
                        <label className="block text-neutral-700 text-l py-4 font-medium mb-2">Mobile Number</label>
                        {/* <input
                            type="text"
                            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-orange-400 "
                            placeholder="Enter your mobile number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        /> */}
                        <PhoneInput
                            defaultCountry='IN'
                            value={mobileNumber}
                            onChange={setMobileNumber}
                            className="custom-phone-input"
                            placeholder="Enter your mobile number"
                        />
                    </div>
                    <div id='recaptcha-container' />
                </>)
                }

                {/* OTP Input (visible only after OTP is sent) */}
                {otpSent && (
                    <div className="mb-4">
                        <label className="block text-neutral-700 text-l py-4 font-medium mb-2">OTP</label>
                        <input
                            type="text"
                            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-orange-400"
                            placeholder="Enter your OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>)
                }

                {/* Send OTP or Submit Button */}
                <div className="flex justify-center">
                    {otpSent ? (
                        <button onClick={verifyOtp} className="hover:bg-orange-400 text-xl hover:text-white transition duration-300 ease-in-out border-orange-400 text-orange-400 py-2 px-4 rounded user-select-none focus:outline-none">
                            Submit
                        </button>
                    ) : (
                        <button
                            onClick={sendOTP}
                            className="hover:bg-orange-400 text-xl hover:text-white transition duration-300 ease-in-out border-orange-400 text-orange-400 py-2 px-4 rounded user-select-none focus:outline-none"
                        >
                            Send OTP
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login;
