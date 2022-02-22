import React from 'react'

import LoginForm from '../../components/mollecules/forms/LoginForm'
import withLayout from '../../components/HOC/withLayout'

function Login() {
    return (
        <LoginForm />
    )
}

export default withLayout(Login)