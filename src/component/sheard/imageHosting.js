
import axios from "axios";

 export const UsePhoto=async(imgHost)=> {
    const formData = new FormData()
    formData.append('image',imgHost)
    const key = import.meta.env.VITE_IMAGE_API_KEY
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${key}`,formData);
    // console.log(data.data.display_url);
    return data.data.display_url;
  }