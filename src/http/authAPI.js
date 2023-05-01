import { $host, $authHost } from "./http";
import bcrypt from "bcryptjs-react";
const jose = require("jose");
const secret = jose.base64url.decode('zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI')

export const generateJWT = async (id, username, role) => {

  const token = await new jose.EncryptJWT({id, username, role })
  .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
  .setExpirationTime('12h')
  .encrypt(secret)

  //const { payload } = await jose.jwtDecrypt(token, secret)

  

  return token;
};

export const hashPassword = async (password) => {
  const hashPassword = await bcrypt.hash(password, 5);
  return hashPassword;
}


export const createUser = async ( newUser) => {
  const { data } = await $host({
    method: "POST",
    url: `/users`,
    data: newUser,
  });
  return data;
};


export const checkAuth = async () => {
  const { payload } = await jose.jwtDecrypt(localStorage.getItem("token"), secret)
  return payload;
};