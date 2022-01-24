import axios from "axios";

class HelloworldService{
    excuteHelloworldService(){
        return axios.get("http://localhost:8080/hello-world")
    }
    excuteHelloworldBeenService(){
        return axios.get("http://localhost:8080/hello-world-been")
    }

    excuteHelloworldBeenPathVarService(name){
        console.log(name)
        return axios.get(`http://localhost:8080/hello-world-been/path/${name}`)
    }
}

export default new HelloworldService;