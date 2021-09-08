import React, { useState } from 'react'
import useFormValidation from './useFormValidation'
import validateLogin from './validateLogin'
import { Link } from 'react-router-dom'
import firebase from '../firebase/firebase'
import { Form, Card } from 'react-bootstrap'


const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    username: "",
}

function Login(props) {

    const { handleChange, handleSubmit, handleBlur, errors, isSubmitting, values } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser)
    const [login, setLogin] = useState(true)
    const [firebaseError, setFirebaseError] =  useState(null)

    async function authenticateUser() {
        const { name, email, password, username } = values

        try {
            login
                ? await firebase.login(email, password)
                : await firebase.register(name, email, password, username)
            props.history.push('/')
        } catch(err) {
            console.error('Erro de autenticação', err)
            setFirebaseError(err.message)
        }
    }


    
    return (
        <div>
            
        </div>
    )
}

export default Login
