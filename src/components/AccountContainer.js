import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import AccountForm from './AccountForm'
import Alert from './Alert'
import useHandleDialog from '../hooks/handleDialog'
import useHandleSnackbar from '../hooks/handleSnackbar'

const backendURL = 'http://localhost:3000';

export default function UserContainer(){

    const dispatch = useDispatch()
    const [openRegisterForm,setOpenRegisterForm,handleRegisterClick,handleRegisterClose] = useHandleDialog()
    const [openLoginForm,setOpenLoginForm,handleLoginClick,handleLoginClose] = useHandleDialog()
    const [
        openSnackbar,
        setOpenSnackbar, 
        handleSnackbarClose, 
        alertSeverity, 
        setAlertSeverity,
        alertMessage,
        setAlertMessage
    ] = useHandleSnackbar(false)

    const handleResponse = (response) => {
    response.json().then(data => {
        if (response.ok) {
            setAlertSeverity('success');
            setOpenRegisterForm(false);
            setOpenLoginForm(false);
            if (data.token) {
                localStorage.setItem('token', data.token);
                dispatch({ type: 'LOG_IN', user: data.payload });
            }
            setAlertMessage(data.message || 'Success!');
        } else {
            setAlertSeverity('error');
            setAlertMessage(data.message || 'An error occurred!');
        }
        setOpenSnackbar(true);
    }).catch(error => {
        setAlertSeverity('error');
        setAlertMessage('Failed to parse response!');
        setOpenSnackbar(true);
        console.error('Response parsing failed:', error);
    });
}

    const createUser = (data) => {
        fetch(`${backendURL}/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(handleResponse)
    }

    const handleRegisterSubmit = (event,username,password,display_name) => {
        event.preventDefault()

        const formData = {username,password,display_name}

        createUser(formData)
    }
	const handleLoginSubmit = (event, username, password) => {
    		event.preventDefault();  // Prevent the default form submission behavior
    		const formData = { username, password };  // Create an object with username and password
    		loginUser(formData);  // Call loginUser to handle the login process
	}


   const loginUser = (data) => {
    fetch(`${backendURL}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
	.then(response => response.json())
      	.then(handleResponse)
	.catch(error => console.error('Login API error:', error));
}


    return (
        <>
        <section className='user-container'>
            <Button className='mui-button' variant="outlined" color="primary" onClick={handleLoginClick}>
                LOGIN
            </Button>
            <p>OR</p>
            <Button variant="outlined" color="primary" onClick={handleRegisterClick}>
                REGISTER
            </Button>
            <p>TO VIEW STATS AND SAVE YOUR SCORES</p>
        </section>
        <AccountForm title='REGISTER' content='Create an account.' open={openRegisterForm} handleClose={handleRegisterClose} handleSubmit={handleRegisterSubmit} />
        <AccountForm title='LOGIN' content='Login to save and view your scores.' open={openLoginForm} handleClose={handleLoginClose} handleSubmit={handleLoginSubmit} />
        <Alert message={alertMessage} severity={alertSeverity} handleClose={handleSnackbarClose} openSnackbar={openSnackbar} />
        </>
    )
}