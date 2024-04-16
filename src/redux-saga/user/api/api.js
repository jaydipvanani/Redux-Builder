import axios from "axios";
import { DELETE_USER, GET_USER, POST_USER, PUT_USER, base_url } from "../../constant";




//get data 
let get_user = (action) => {


    //console.log("action from get api");


    return axios.get(base_url + GET_USER).then((res) => {

        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status };



    });
};

let post_user = (action) => {
    console.log("action from post api");

    return axios.post(base_url + POST_USER, action.payload).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let delete_user = (action) => {

    console.log("action from delete api");

    return axios.delete(base_url + DELETE_USER + action.payload).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let update_user = (action) => {

    console.log(action.payload,"action from update api");

    return axios.put(base_url + PUT_USER + action.payload.id, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

export { get_user, post_user, delete_user, update_user }