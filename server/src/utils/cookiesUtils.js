import cookie from 'cookie-parser';
export const setAccessTokenCookie = (res, token) => {
    res.cookie('accessToken', token, {
        httpOnly: true,
        secure: true,
        satisfies: 'Strict',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
}
export const setRefreshTokenCookie = (res, token) => {
    res.cookie('refreshToken', token, {
        httpOnly: true,
        secure: true,
        satisfies: 'Strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
}
export const clearTokensCookies = (res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
}