import { toast } from "react-toastify";
import { SERVER } from "../misc/Globals";

async function FaceDetectionAPI(url, api_key, api_secret){
    const urlParams = new URLSearchParams({
        api_key : api_key,
        api_secret : api_secret,
        urls : url
    })
    const endpoint = "https://api.skybiometry.com/fc/faces/detect.json?";
    
    try {
        const response = await fetch(endpoint + urlParams);
        const result = await response.json();
        return result
    } catch (error) {
        toast.error("Backend error")
        return error
    }
}

async function LocalFaceDetectionAPI(ImgURL){
    try{
        const response = await fetch(SERVER + "/DetectFaces",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"},
                credentials : "include",
                body: JSON.stringify({
                    "IMG" : ImgURL 
                })
        })
        const result = await response.json()
        return result
    }
    catch(error){
        toast.error("Backend Error")
        return error
    }
}


export {FaceDetectionAPI, LocalFaceDetectionAPI}