

async function authMiddleware(req, res, next) {
    try {
        if (!req.headers.authorization?.startsWith("Bearer "))
            return res.status(401).send({
                success: false,
                message: "Not authorized",
            });

        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authMiddleware;