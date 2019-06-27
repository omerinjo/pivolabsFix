import jwt_decode from 'jwt-decode';

export default {

    checkForToken: async () => {
        let token = await localStorage.getItem('Token')
        if (token) {
            let decoded = await jwt_decode(token);
            return decoded
        }
        else {
            return false
        }
    }
}