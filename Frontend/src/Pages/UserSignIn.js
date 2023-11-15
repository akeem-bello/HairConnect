import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignIn = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('');
    const url = 'http://localhost:2023/users/signin';

    const signIn = ()=>{
        const userDetails = {email, password};
        axios.post(url, userDetails).then((res)=>{
            setmessage(res.data.message);
            localStorage.hairConnectToken = res.data.hairConnectToken;
            if(res.data.status){
                navigate('/users/dashboard');
            }
        })
    }
  return (
    <div>
        <div className="container mt-2">
           <div className="row">
               <div className="col-7 mx-auto mt-5 shadow p-5">
                   <h3>Sign-In</h3>
                   <div className='text-center'>{message}</div>
                      <input className='form form-control my-2' type="text" placeholder='E-mail' value={email} onChange={(e)=>setemail(e.target.value)}/>
                      <input className='form form-control my-2' type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                      <button type='submit' className='btn btn-primary my-2 w-100' onClick={signIn}>Sign In</button> 
                   <div className='mt-2'><p>By continuing, you agree to HairConnect's <u>Conditions of Use</u> and <u>Privacy Notice.</u></p></div>
                   <div>
                        <p><strong>Barber/Hairdresser</strong> Sign In <a href="/service-provider/signin">here.</a></p>
                    </div>
               </div>             
           </div>
        </div> 
    </div>
  )
}

export default UserSignIn