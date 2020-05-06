export const authHeader = () => {

    let user = JSON.parse(localStorage.getItem('avto-test-user')) !== undefined ? JSON.parse(localStorage.getItem('avto-test-user')) : {};

    if (user && user.email) {

        return { 'Authorization': user };
    } else {
        return {};
    }
}
