import { $host, $authHost } from "./http";
import bcrypt from "bcryptjs-react";
const jose = require("jose");
const secret = jose.base64url.decode('zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI')

export const generateJWT = async (id, username, role) => {

  const token = await new jose.EncryptJWT({id, username, role })
  .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
  .setExpirationTime('2h')
  .encrypt(secret)

  //const { payload } = await jose.jwtDecrypt(token, secret)

  

  return token;
};

export const hashPassword = async (password) => {
  const hashPassword = await bcrypt.hash(password, 5);
  return hashPassword;
}


export const registration = async (username, password, role) => {
  const { data } = await $host.post("api/user/registration", {
    username,
    password,
    role,
  });

 // localStorage.setItem("token", data.token);
 // localStorage.setItem("role", data.user.role);
 // return jwt_token(data.token);
};

export const login = async (username, password, role) => {
  const { data } = await $host.post("api/user/login", {
    username,
    password,
    role,
  });
  //localStorage.setItem("token", data.token);
 // localStorage.setItem("role", data.user.role);
 // return jwt_token(data.token);
};

export const checkAuth = async () => {
  const { payload } = await jose.jwtDecrypt(localStorage.getItem("token"), secret)
  return payload;
};