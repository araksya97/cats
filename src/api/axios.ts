import axios from 'axios';

class Exception extends Error {
    private readonly details: any | null;

    constructor(name: string , details: any = null) {
        super(name);
        Object.setPrototypeOf(this, new.target.prototype);
        this.details = details;
    }
}


interface IParams {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any,
    params?: any
}

const client = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: 'https://api.thecatapi.com/v1' ,
});

/**
 * @param params
 */
export const sendRequest = async (params: IParams) => {
    try {
        const result = await client.request({...params});

        return result.data;

    } catch (err: any) {
        const { details, error } = err.response.data;
        throw new Exception( error, details);
    }
};



export const axiosInstance = client;
