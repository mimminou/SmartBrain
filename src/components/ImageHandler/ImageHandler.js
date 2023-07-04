async function FaceDetectionAPI(url){
    const mock_api_key = "flsdkjsdlkfghsdflqsldfqsk" //This does not exist
    const mock_secret_key = "qslkjfsqdlkghqskljfhqslk" //This does not exist either, just random string
    const urlParams = new URLSearchParams({
        api_key : mock_api_key,
        api_secret : mock_secret_key,
        urls : url
    })
    const endpoint = "https://api.skybiometry.com/fc/faces/detect.json?";
    
    try {
        const response = await fetch(endpoint + urlParams);
        const result = await response.text();
        console.log(result);
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

export default FaceDetectionAPI