const signupModal = require("./modals/signup-modal");
const checkExistingUser = async (username)=> {
    let existingUser = false;
    await signupModal.find({username: username}).then((userData)=> {
        if(userData.length) {
            existingUser = true;
        }
    });
    return existingUser;
}
module.exports = checkExistingUser;