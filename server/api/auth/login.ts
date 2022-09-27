import { OAuth2Client } from "google-auth-library";

import keys from '../../../oauth.keys.json';

const client = new OAuth2Client(
    keys.web.client_id,
    keys.web.client_secret,
    keys.web.redirect_uris[0]
);

const url = client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
});

export default defineEventHandler(async (event) => {
    return sendRedirect(event, url);
});