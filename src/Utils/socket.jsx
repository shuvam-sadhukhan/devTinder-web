import io from 'socket.io-client';
import { BASE_URL } from './constants';

export const createSocket=()=>{
    if(location.hostname==="localhost"){
        return io(BASE_URL)

    }
    else{
        return io("/",{path:"https://codesphere-2127.onrender.com/socket.io"})
    }
    
}