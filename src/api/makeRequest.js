import { BASE_API_URL } from "../constants";

export default ({ url = "/", params = "" }) => {
    console.log(params);
    return fetch(BASE_API_URL + url + params)
        .then((res) => res.json())
        .catch((e) => {
            throw e;
        });
};
