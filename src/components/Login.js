import React, { useState } from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE } from '../utils/constant'

const Login = () => {
    const [isSignInPage, setIsSignPage] = useState(false)
    return (
        <div className='h-full'>
            <img
                className='absolute z-5'
                alt='backgroung'
                src={BACKGROUND_IMAGE}
            ></img>
            <Header></Header>
            <div className='flex flex-col items-start justify-center w-4/12 p-4 absolute z-10  bg-black bg-opacity-80 mx-auto right-0 left-0 mt-40 text-white'>
                <form className='flex flex-col w-full rounded-xl px-6 py-10 m-10 gap-4'>
                    <h1 className='text-3xl font-semibold m-2'>
                        {isSignInPage ? 'Sign In' : "Sign Up"}
                    </h1>
                    {
                        !isSignInPage ?
                            <input
                                type='text'
                                className='w-9/12 px-4 py-4 m-2 rounded-sm'
                                placeholder='Name'
                            /> : null
                    }
                    <input
                        type='email'
                        className='w-9/12 px-4 py-4 m-2 rounded-sm'
                        placeholder='Email'
                    />
                    <input
                        type='password'
                        className='w-9/12 px-4 py-4 m-2 rounded-sm'
                        placeholder='Password'
                    />
                    <button className=' text-center text-xl w-9/12 bg-red-600 py-2 px-4 m-2 rounded-sm'>

                        {isSignInPage ? 'Sign In' : "Sign Up"}
                    </button>
                    <p className='w-full m-2' onClick={() => setIsSignPage(prev => !prev)}>
                        {
                            isSignInPage
                        }
                        {
                            isSignInPage ?
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

export default Login