import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {loginTC} from "../../state/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {Navigate} from 'react-router-dom'


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


const Login = () => {

    let isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.authReducer.isLoggedIn)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.password) {
                errors.password = 'Required'
            }
            return errors
        }
    })

    if(isLoggedIn) {
        return <Navigate to={'/'} />
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit} >
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            // name='email'
                            // onChange={formik.handleChange}
                            // value={formik.values.email}
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}

                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            // name='password'
                            // onChange={formik.handleChange}
                            // value={formik.values.password}
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                // name='remember me'
                                // onChange={formik.handleChange}
                                // вместо этого можно передать сразу все пропсы
                                {...formik.getFieldProps("rememberMe")}
                                checked={formik.values.rememberMe}/>}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>

};

export default Login;