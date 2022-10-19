export const validateEmail = (email) => {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let valid = re.test(String(email).toLowerCase());
    return valid;
}
export const validateContactNo = (phoneNo) => {
    var reg = /^[89]\d{7}$/;
    let valid = reg.test(String(phoneNo).toLowerCase());
    return valid;
}

export const validateNric = (nric) => {
    if(nric){
        var reg = /^[stfg]\d{7}[a-z]$/;
        var valid = reg.test(String(nric).toLowerCase())
        return valid;
    }
}
export const validatePostalCode = (postal_code)=>{
    var reg = /^\d{6}$/;
    let valid = reg.test(String(postal_code).toLowerCase())
    return valid
}