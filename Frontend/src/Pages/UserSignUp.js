import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';

const UserSignUp = () => {
    const navigate = useNavigate();
    const url = 'http://localhost:2023/users/signup';
    const [message, setmessage] = useState();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: '',
            address: '',
            city: '',
            province: '',
            phoneNumber: '',
            email: '',
            password: ''
        },
        onSubmit: (values)=>{
            const userDetails = {
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                city: values.city,
                province: values.province,
                phoneNumber: values.phoneNumber,
                email: values.email,
                password: values.password
            };

            axios.post (url, userDetails).then((res)=>{
                setmessage(res.data.message);
                if(res.data.status){
                    navigate('/users/signin');
                }
            })
        },
        validate: (values)=>{
            let errors = {};
            if(!values.firstName){
                errors.firstName = 'This field is required'
            }

            if(!values.lastName){
                errors.lastName = 'This field is required'
            }

            if(!values.address){
                errors.address = 'This field is required'
            }

            if(!values.city){
                errors.city = 'This field is required'
            }

            if(!values.province){
                errors.province = 'This field is required'
            }

            if(!values.phoneNumber){
                errors.phoneNumber = 'This field is required'
            }

            if(!values.email){
                errors.email = 'This field is required'
            }

            if(!values.password){
                errors.password = 'This field is required'
            }

            return errors;
        }
    })
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-7 mx-auto shadow p-5 mb-5 mt-5">
                    <h3 className='text-center'>User Sign Up</h3>
                    <p className='text-center'>Welcome to HairConnect</p>
                    <p className='text-center'><em>...Where Beauty Meets Convenience</em></p>
                    <p className='text-center text-success'>Are you a <strong>barber/hairdresser?</strong> Create an account <a href="/service-provider/signup">here.</a></p>
                    <div className='text-center'>{message}</div>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <label><strong>First Name</strong></label>
                        <input type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='firstName'/>
                        {formik.touched.firstName ? <div className='text-danger'>{formik.errors.firstName}</div> : ''}

                        <label><strong>Last Name</strong></label>
                        <input type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='lastName'/>
                        {formik.touched.lastName ? <div className='text-danger'>{formik.errors.lastName}</div> : ''}

                        <label><strong>Address</strong></label>
                        <input type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='address'/>
                        {formik.touched.address ? <div className='text-danger'>{formik.errors.address}</div> : ''}

                        <label><strong>City</strong></label>
                        <input type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='city'/>
                        {formik.touched.city ? <div className='text-danger'>{formik.errors.city}</div> : ''}

                        <select className='w-100' onChange={formik.handleChange} onBlur={formik.handleBlur} name='province'>
                            <option selected disabled>Province</option>
                            <option value="Alberta">Alberta</option>
                            <option value='British Columbia'>British Columbia</option>
                            <option value='Manitoba'>Manitoba</option>
                            <option value='New Brunswick'>New Brunswick</option>
                            <option value='Newfoundland and Labrador'>Newfoundland and Labrador</option>
                            <option value='Nova Scotia'>Nova Scotia</option>
                            <option value='Ontario'>Ontario</option>
                            <option value='Saskatchewan'>Saskatchewan</option>
                        </select>
                        {formik.touched.province ? <div className='text-danger'>{formik.errors.province}</div> : ''}

                        <label><strong>Phone Number</strong></label>
                        <input type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='phoneNumber'/>
                        {formik.touched.phoneNumber ? <div className='text-danger'>{formik.errors.phoneNumber}</div> : ''}

                        <label><strong>Email Address</strong></label>
                        <input type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='email'/>
                        {formik.touched.email ? <div className='text-danger'>{formik.errors.email}</div> : ''}

                        <label><strong>Password</strong></label>
                        <input type="text" className='form-control my-2' onChange={formik.handleChange} onBlur={formik.handleBlur} name='password'/>
                        {formik.touched.password ? <div className='text-danger'>{formik.errors.password}</div> : ''}
                        
                        <button type='submit' className='btn mt-4 w-100 p-2 justify-center bg-success'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSignUp