import React, { useRef, useState } from 'react'
import { validateFormFields } from "../utils/validateForm"
const LoginInForm = () => {
    const [isSigninPage, setIsSigninPage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleButtonClick = () => {
        const errorMessage = validateFormFields({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        setErrorMessage(errorMessage)
    }
    return (
        <div className='flex justify-center items-end'>
            <div className='flex flex-col items-start justify-center w-4/12 p-4  bg-black bg-opacity-80 text-white rounded-lg'>
                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col w-full rounded-xl px-6 py-4 m-10 gap-4'>
                    <h1 className='text-3xl font-semibold m-2'>
                        {isSigninPage ? 'Sign In' : "Sign Up"}
                    </h1>
                    {
                        !isSigninPage ?
                            <input
                                type='text'
                                className='w-9/12 px-4 py-4 m-2 rounded-sm bg-slate-600'
                                placeholder='Name'
                            /> : null
                    }
                    <input
                        ref={emailRef}
                        type='text'
                        className='w-9/12 px-4 py-4 m-2 rounded-sm bg-slate-600'
                        placeholder='Email'
                    />
                    <input
                        ref={passwordRef}
                        type='password'
                        className='w-9/12 px-4 py-4 m-2 rounded-sm bg-slate-600'
                        placeholder='Password'
                    />
                    <p className='text-xs font-bold text-red-500 text-wrap m-2'>{errorMessage}</p>
                    <button
                        className=' text-center text-xl w-9/12 bg-red-600 py-2 px-4 m-2 rounded-sm'
                        onClick={handleButtonClick}
                    >

                        {isSigninPage ? 'Sign In' : "Sign Up"}
                    </button>
                    <p className='w-full m-2' onClick={() => setIsSigninPage(prev => !prev)}>
                        {
                            isSigninPage
                        }
                        {
                            isSigninPage ?
                                <span>
                                    <span className='font-light'>New to Netflix?</span> <span className='font-semibold'>Sign up now.</span>
                                </span> :
                                <span>
                                    <span className='font-light'>Already a memeber?</span> <span className='font-semibold'>Sign in.</span>
                                </span>
                        }
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginInForm