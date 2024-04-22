import axios from 'axios';
import {useEffect} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Donate(){

    useEffect(()=>{
        axios.get('http://localhost:8081/donate')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])
    return(
        <>
             <Navbar/>
             
             <Footer/>
        </>
    )
}
