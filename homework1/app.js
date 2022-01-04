import axios from "axios";
const getData =  async (userId) => {
    let userData = {};
    await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(result => {
            userData = result.data;
        });
    await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(result => {
            userData.posts = result.data;
        });
    return userData;
}
export const getMessage = () => console.log("Hello");

export default getData;
