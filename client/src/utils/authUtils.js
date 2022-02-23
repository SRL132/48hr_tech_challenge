export const isAuthenticated = () => {
    const token = localStorage.getItem('token');

    console.log(token);

    if (JSON.parse(token)) {
        return true;
    }
    return false;
}