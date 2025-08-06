/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-toastify/dist/ReactToastify.css';
import { axiosinstance } from './Responseinterceptors';
import { showToastMessage } from '../utils/Toast.errors';

const getApis = async (endpoint: string,queryParams: any) => {
    try {
        const result = await axiosinstance.get(endpoint,
        {
            // validateStatus: () => true,
            params: queryParams,    
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        if(result && result.data) {
            return result.data;
        }
        else {
            showToastMessage("internal server error",500);
        }
        
    } catch (error) {
        console.log(error);
    }   
}

const postApis = async (endpoint: string,data: unknown,queryParams: any) => {
    try {
        const result = await axiosinstance.post(endpoint,data,
        {
            // validateStatus: () => true,
            params: queryParams,
            headers: data instanceof FormData
            ? { 'Content-Type': 'multipart/form-data' }
            : { 'Content-Type': 'application/json' },
        })
        if(result.data) {
            return result?.data;
        }
        else {
            showToastMessage("internal server error",500);
        }
        
    } catch (error) {
        console.log(error);
    }   
}

const deleteApis = async (endpoint: string,queryParams: any) => {
    try {
        const result = await axiosinstance.delete(endpoint,
        {
            // validateStatus: () => true,
            params: queryParams,
        })
        if(result.data) {
            return result?.data;
        }
        else {
            showToastMessage("internal server error",500);
        }
        
    } catch (error) {
        console.log(error);
    }   
}
export { getApis,postApis,deleteApis };