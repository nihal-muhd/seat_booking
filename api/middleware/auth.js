exports.protect = async (req, res, next) => {
    try {
        let token1;
        const jwtCookie = req.headers.cookie.split(";")[1];
        //1) get the token and check if it is there
        if (
            req.headers.cookie
        ) {
            token1 = await req.headers.cookie.split("=")[1];
            console.log('after spliting', token1);
        }
        if (!token1) {
            console.log(" error");
            return res.status(401).json({
                status: "fail",
                message: "there no token in your header please login",
            });
        }

        //2)varification of token
        console.log("msg", token1);
        const decoded = await jwt.verify(token1, process.env.JWT_SECRET);
        console.log(decoded);

        // 3)check user still exists  'id' is the token payload
        const freshUser = await UsersModel.findById(decoded.id);
        if (!freshUser) {
            return res.status(401).json({
                status: "fail",
                message: "the token belongs to the user does not exists",
            });
        }
        next();
    } catch {
        res.status(401).json({
            status: "fail",
            message: "token is manipulated Access denied!",
        })
    }
}