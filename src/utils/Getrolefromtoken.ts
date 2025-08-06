import { jwtDecode } from "jwt-decode";
type tokentype = {
  roles : string
}
const Getrolefromtoken = (token: string) => {
  try {
    const decoded = jwtDecode(token) as tokentype;
    return decoded.roles;
  } 
  catch (error) {
    console.log(error);
  }
};

export { Getrolefromtoken }
