import * as fs from 'fs';

export const privateKEY  = fs.readFileSync('src/app/authentication/jwt/private.key', 'utf8');
export const publicKEY  = fs.readFileSync('src/app/authentication/jwt//public.key', 'utf8');
