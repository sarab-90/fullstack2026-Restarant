export const errorHandler = (err, req, res, next) => {
    console.error(err);
    return res.status(500).json({
        succsess: false,
        message: 'Internal Server Error' });
}