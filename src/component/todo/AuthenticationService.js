import axios from "axios";
import { API_URL, USERNAME_SESSION_ATTREBUTE } from "../../Constants";

class AthenticationService{

    // excuteBasicAuth(username,password){
    //     return axios.get("http://localhost:8080/basicauth",{headers:{authorization:this.createBasicAuthToken(username,password)}})
    // }

    // createBasicAuthToken(username, password){
    //     return "Basic " + window.btoa(username +":"+password);
    // }

    // //This Class helps to put user name in the session storage this is your to this user is loged in or not
    // registerSuccess(username,password){
    //     //let basic = "Basic " + window.btoa(username +":"+password);
    //     sessionStorage.setItem('authenticatedUser',username);
    //     this.setupAxiosIntercepter(this.createBasicAuthToken(username,password));
    // }

    excuteJWTAuth(username,password){
        return axios.post(`${API_URL}/authenticate`,{
            username,
            password,
        })
    }

    createJWTAuthToken(token){
        return "Bearer " + token;
    }

    registerSuccess(username,token){
        //let basic = "Basic " + window.btoa(username +":"+password);
        sessionStorage.setItem(USERNAME_SESSION_ATTREBUTE,username);
        this.setupAxiosJWTIntercepter(this.createJWTAuthToken(token));
    }

    logout(){
        sessionStorage.removeItem(USERNAME_SESSION_ATTREBUTE);
    }

    isUserLogedin(){
        if(sessionStorage.getItem(USERNAME_SESSION_ATTREBUTE)){
            return true;
        }
        return false;
    }

    getLogedinUser(){
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTREBUTE)
        if(user){
            return user;
        }
        return "";
    }

    // setupAxiosIntercepter(basic){   
    //     axios.interceptors.request.use(
    //         (config) =>{      
    //             if(this.isUserLogedin){
    //                 config.headers.authorization = basic;
    //             }        
    //            return config;
    //         }
    //     )
    // }

    setupAxiosJWTIntercepter(token){   
        axios.interceptors.request.use(
            (config) =>{      
                if(this.isUserLogedin){
                    config.headers.authorization = token;
                }        
               return config;
            }
        )
    }
}

export default new AthenticationService();