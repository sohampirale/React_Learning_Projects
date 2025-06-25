const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?\`~"\\`;
const IdLen=20;
const charsLen=chars.length;

const randomIdGenerator=()=>{
    let id='';
    for(let i=0;i<20;i++){
        id+=chars[Math.floor(Math.random()*charsLen)];
    }
    return id;
}

export default randomIdGenerator;