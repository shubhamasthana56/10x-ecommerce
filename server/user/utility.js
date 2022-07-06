const signupModal = require("./modals/signup-modal");
const bcrypt = require("bcryptjs");
const checkExistingUser = async (username)=> {
    let existingUser = false;
    await signupModal.find({username: username}).then((userData)=> {
        if(userData.length) {
            existingUser = true;
        }
    });
    return existingUser;
}

const generatePasswordHash = (password) => {
    const salt = 10;
    return new Promise((resolve, reject)=> {
         bcrypt.genSalt(salt).then((hashSalt)=> {
            bcrypt.hash(password, hashSalt).then((passwordHash)=> {
                resolve(passwordHash);
            })
        })
    });
}
module.exports = {checkExistingUser, generatePasswordHash};