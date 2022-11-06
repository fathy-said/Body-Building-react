import axios from "axios";

export const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export let SearchAxios = async (url, opt) => {
    let res = await axios.get(url, opt);
    return res.data;
};
