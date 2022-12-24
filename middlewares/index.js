const validarCampos = require("../middlewares/validar-campos");
const ValidarJWT = require("../middlewares/validar-jwt");
const hasRole = require("../middlewares/validar-roles");

module.exports = {
  ...validarCampos,
  ...ValidarJWT,
  ...hasRole,
};
