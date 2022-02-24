import axios from "axios";
import { useEffect, useState } from "react";


export function useFetch(url){
    const [data, setData] = useState(null)



    useEffect(() => {
        axios.get(url)
           .then(response => {
               console.log(response);
               setData(response.data)
           })
       }, [])
return {data}
}