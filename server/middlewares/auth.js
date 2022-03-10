const auth = (req, res, next) => {
    const token  = req.header('Authorization').replace("Bearer ","");
    console.log(token);
    next();
}

module.exports = auth;