import * as axios from "react-native-axios";


export const productsAPI = () => {
    return axios.get("https://dummyjson.com/products");
}