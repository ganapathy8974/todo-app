class AthenticationService{
    //This Class helps to put user name in the session storage this is your to this user is loged in or not
    registerSuccess(username,password){
        sessionStorage.setItem('authenticatedUser',username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLogedin(){
        if(sessionStorage.getItem("authenticatedUser")){
            return true;
        }
        
        return false;
    }
}

export default new AthenticationService();