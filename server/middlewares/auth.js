const auth = (req, res, next) => {
    const token  = req.header('Authorization');
    console.log(token);
    next();
}

module.exports = auth;