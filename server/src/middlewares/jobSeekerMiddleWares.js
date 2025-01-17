import jwt from "jsonwebtoken";
import { jwt_secret } from "../config/config.js";

export const jobSeekerAuthenticate = (req, res, next) => {
    try {

        const token = req.cookies.jobSeekerToken
        if (!token) {
            return res.status(404).json({
                status: false,
                message: 'un autherized job seeker'
            })
        }

        const decoded = jwt.verify(token, jwt_secret);
        console.log('decoded', decoded);
        req.jobSeeker = decoded

        next();

    } catch (error) {
        console.log('error', error);
    }
}