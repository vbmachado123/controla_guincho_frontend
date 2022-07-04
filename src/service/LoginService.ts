import http from '../https-commons';

const signIn = (username: string, password: string) => {
    return http.post<any>('/auth/user', { username, password });
};

const LoginService = {
    signIn,
};

export default LoginService;
