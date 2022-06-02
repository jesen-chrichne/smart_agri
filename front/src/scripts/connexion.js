import axios from 'axios';

class Connection
{
    url = null
    constructor(url)
    {
        this.url = url
    }
    getData = async (data)=>
    {
        data = await axios.get(this.url+'/'+data);
        return data.data.value
    }
    postData = async (data,params) =>
    {
        data = await axios.post(this.url+'/'+data,params);
        return data.data.value
    }

}

export default Connection;