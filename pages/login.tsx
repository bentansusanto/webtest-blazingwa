import React from 'react'
import Login from '../components/Auth/login';
import LayoutAuth from '../layouts/layoutAuth/index';

const LoginPage = () => {
  return (
    <div>
        <LayoutAuth>
            <Login/>
        </LayoutAuth>
    </div>
  )
}

export default LoginPage