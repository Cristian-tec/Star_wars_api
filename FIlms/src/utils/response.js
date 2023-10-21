module.exports = (res, statusCode, data)=>{
    res.status(statusCode).json({
        error: false,
        info: 'info',
        data: data
    });
}