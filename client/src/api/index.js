import axios from "axios";
const baseURL = "http://localhost:8000";

export const getId = () => localStorage.getItem("ID");
export const getToken = () => localStorage.getItem("TOKEN");

export const login = (username, password) => {
    console.log(username, password);
    return axios
        .post(baseURL + "/auth/login", {
            username,
            password
        })
        .then(res => res.data)
        .then(data => {
            const { authorization, id } = data.data;
            localStorage.setItem("ID", id);
            localStorage.setItem("TOKEN", authorization);
        });
};

export const postRequest = (address, dichvu, dichvucon, detail, phone, user_name, date) => {
    console.log(address, dichvu, dichvucon, detail, phone, user_name, date)
    return axios.post(
        baseURL + "/post/request/" + getId(), 
        {address, dichvu, dichvucon, detail, phone, user_name, date},
        { headers: { "Authorization": getToken() } }
    )
    .then(res=>res.data)
    .then(data => console.log(data.data))
    .catch(err => { console.log(err) })
}
