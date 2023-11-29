import React, {useState} from 'react';
import axios from 'axios';

const AddServices = () => {
    const url = 'http://localhost:2023/users/service-provider/addservices';
    const [service, setservice] = useState('');
    const [duration, setduration] = useState('');
    const [price, setprice] = useState('');

    const addService = ()=>{
        const serviceDetails = {
            service,
            duration,
            price
        };
        axios.post (url, serviceDetails).then((res)=>{
            if(res.data.status){
                alert('Service added successfully.');
                setservice('');
                setduration('');
                setprice('');
            }else{
                alert('An error occured, please try again.')
            }
        })
    }
  return (
    <div>
        <div className="container">
            <form action="">
                <label>
                    <strong>Service: </strong>
                    <textarea type="text" value={service} onChange={(e)=>setservice(e.target.value)}/>
                </label>

                <label>
                    <strong>Duration: </strong>
                    <input type="text" value={duration} onChange={(e)=>setduration(e.target.value)}/>
                </label>

                <label>
                    <strong>Price: </strong>
                    <input type="text" value={price} onChange={(e)=>setprice(e.target.value)}/>
                </label>

                <button onClick={addService}>Add Service</button>
            </form>
        </div>
    </div>
  )
}

export default AddServices