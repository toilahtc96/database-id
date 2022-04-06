import Cookies from "universal-cookie";

const cookies = new Cookies();
export const Logout = function () {
    cookies.remove("accessToken");
    window.location.assign("/login")
}