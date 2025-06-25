function getLastReqGap(lastReq){
    if(!lastReq)return 9999;
    const millis=Date.now()-lastReq;
    const sec=millis/1000;
    return sec;
}

export default getLastReqGap;