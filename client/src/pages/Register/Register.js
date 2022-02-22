import React from 'react'
import withLayout from '../../components/HOC/withLayout'

import RegisterForm from '../../components/mollecules/forms/RegisterForm'
function Register() {
    return (
        <RegisterForm />
    )
}

export default withLayout(Register)