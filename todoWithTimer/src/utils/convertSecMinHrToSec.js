function convertSecMinHrToSec(sec,min,hr){
    let timeSec=sec;
    timeSec+=(min*60);
    timeSec+=(hr*60*60)
    return timeSec;
}

export default convertSecMinHrToSec;