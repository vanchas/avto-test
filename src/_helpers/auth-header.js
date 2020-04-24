// import { history } from "./history";

export const authHeader = () => {

    let user = JSON.parse(localStorage.getItem('avto-test-user'));

    if (user && user.email) {
        // console.log('Authorization:' + user);

        return { 'Authorization': user };
    } else {
        return {};
    }
}