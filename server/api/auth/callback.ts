import { OAuth2Client } from "google-auth-library";

import jwt from "jsonwebtoken";
import keys from '../../../oauth.keys.json';

const client = new OAuth2Client(
    keys.web.client_id,
    keys.web.client_secret,
    keys.web.redirect_uris[0]
);

export default defineEventHandler(async (event) => {
    const { code } = useQuery(event);
    if(!code) {
        event.res.statusCode = 400;
        return {
            error: 'Missing code'
        };
    }

    const { tokens } = await client.getToken(code.toString());

    const googleUser = await client.verifyIdToken({
        idToken: tokens.id_token,
        audience: keys.web.client_id
    });
    
    if(!googleUser) {
        event.res.statusCode = 400;
        return {
            error: 'Invalid token'
        };
    }

    const { email, name, picture } = googleUser.getPayload();


    const token = jwt.sign({
        email,
        name,
        avatarUrl: picture,
        googleId: googleUser.getUserId()
    }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

    setCookie(event, "token", token, { maxAge: 60 * 60 * 24, httpOnly: true, secure: process.env.NODE_ENV === "production" });

    return sendRedirect(event, "/");
});