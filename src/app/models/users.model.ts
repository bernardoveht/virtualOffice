import { TipoUsuario } from "../constants/users/users";

export interface UserAuth {
    access_token:  string;
    token_type:    string;
    expires_in:    number;
    refresh_token: string;
}
export interface User {
    accountStatus:      string;
    sub:                string;
    username:           string;
    governmentLevel:    string;
    userType:           TipoUsuario;
    provinceId:         string[];
    municipalityId:     string;
    organismId:         string;
    organizationalRole: string;
    firstName:          string;
    lastName:           string;
    roles:              string[];
}
