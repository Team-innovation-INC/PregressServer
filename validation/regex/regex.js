const passwordValidationRegex    = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const emailValidationRegex       = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const phoneNumberValidationRegex = /\d{3}-\d{3}-\d{4}/

const regex = {passwordValidationRegex, emailValidationRegex, phoneNumberValidationRegex};
module.exports = regex;