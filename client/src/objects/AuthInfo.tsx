import RoleType from "../enums/RoleType";

type AuthInfo = {
    authorized: boolean;
    role: RoleType;
}

export default AuthInfo;