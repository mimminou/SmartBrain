async function FaceDetectionAPI(url){
    const endpoint = 'https://face-detection6.p.rapidapi.com/img/face';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'face-detection6.p.rapidapi.com'
        },
        body: {
            url: url,
            accuracy_boost: 2
        }
    };
    try {
        const response = await fetch(endpoint, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

export default FaceDetectionAPI