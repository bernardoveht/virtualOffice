import credentialAPI from 'src/assets/config/config.json';

export enum TipoUsuario {
  Governmental = "Governmental",
  Private = "Private"
}
 export const CredencialAPI = {
  Username: credentialAPI.credencialesApi.user,
  Password:credentialAPI.credencialesApi.psw
 }
