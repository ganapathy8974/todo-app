import axios from "axios";

class HelloworldService{
    excuteHelloworldService(){
        return axios.get("http://localhost:8080/hello-world")
    }
    excuteHelloworldBeenService(){
        return axios.get("http://localhost:8080/hello-world-been")
    }

    excuteHelloworldBeenPathVarService(name){
        //console.log(name)
        // let username = "ganu";
        // let password = "12345";

        // let basic = "Basic " + window.btoa(username +":"+password);

         return axios.get(`http://localhost:8080/hello-world-been/path/${name}`,
         //{
        //     headers:{
        //         authorization : basic,
        //     }
        // }
        )
    }
}

export default new HelloworldService;