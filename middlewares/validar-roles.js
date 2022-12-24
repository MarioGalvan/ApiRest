const { request, response } = require("express");

const esAdminRole = (req = request, res = response, next) => {
  if (!req.user) {
    return res.status(500).json({
      msg: "Se quiere verificar el role sin validar el token primero",
    });
  }
  const { rol, nombre } = req.user;
  if (rol !== "ADMIN_ROLS") {
    return res.status(401).json({
      msg: `el usuario ${nombre} no es administrador - no tiene privilegios de administrador`,
    });
  }
  next();
};

const hasRole = (...roles) => {

  return (req = request, res = response, next) => {
    if (!req.user) {
      return res.status(500).json({
        msg: "Se quiere verificar el role sin validar el token primero",
      });
    }

   if(!roles.includes(req.user.rol)){
      return res.status(401).json({
        msg: `el servicio requiere uno de estos roles ${roles}`,
      });
    }

    next();
  };

};

module.exports = {
  esAdminRole,
  hasRole
};
