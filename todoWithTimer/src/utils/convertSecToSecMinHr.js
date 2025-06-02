const convertSecToSecMinHr=(timeSec)=>{
    let sec=timeSec;
    let min=sec/60;
    sec=sec%60;
    let hr=Math.floor(min/60);
    min=Math.floor(min%60);
    return {sec,min,hr}
}

export default convertSecToSecMinHr;