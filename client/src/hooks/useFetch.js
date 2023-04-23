import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios';

const useFetch = (url)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try{
                const res = await axios.get(url)
                setData(res.data);
            }catch(err){
                seterror(err);
            }
            setLoading(false)
            
        };
        fetchData()
    },[url]);

    const reFetch = async ()=>{
        setLoading(true)
        try{
            const res = await axios.get(url)
            setData(res.data);
        }catch(err){
            seterror(err);
        }
        setLoading(false)
        
    };

    return {data, loading, error, reFetch};
}

export default useFetch;