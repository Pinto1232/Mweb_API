import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";



const api = axios.create({
    baseURL: 'https://apigw.mweb.co.za',
    timeout: 20000
})


/* 
   Note: The AxiosRequestConfig will allow me to added header of token in the get request I am working on 
   this code goes int useFetch as parameters (, options?: AxiosRequestConfig)
*/
export function useFetch(url){
    const [data, setData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        /* 
           Without base URL I need to use the word axios where a put the word api below
           This code goes in the get method as parameters (, options)
        */
        api.get(url)
           .then(response => {
               console.log(response);
               setData(response.data.json())
           })
           .catch(err => {
               setError(err)
           })
           .finally(() => {
                setIsFetching(false)
           })

       }, [])
return {data, error, isFetching }
}