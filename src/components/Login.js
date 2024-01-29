import React from 'react'
import Header from './Header'
import LoginInForm from './LoginInForm'
const Login = () => {

    return (
        <div className='bg-hero-background w-full h-[100vh] bg-cover bg-center relative'>
            <div className='bg-black bg-opacity-40 h-full'>
                <Header />
                <LoginInForm></LoginInForm>
            </div>
        </div>
    )
}

export default Login