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
        return error
    }
}

export default FaceDetectionAPI