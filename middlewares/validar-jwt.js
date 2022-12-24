const jwt = require("jsonwebtoken");
const { response, request } = require("express");
const usuario = require("../models/usuario");

const ValidarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const user = await usuario.findById(uid);
    if (!user) {
      return res.status(401).json({
        msg: "Token no válido - usuario no existe en DB",
      });
    }
    if (!user.estado) {
      return res.status(401).json({
        msg: "Token no válido - usuario con estado: false",
      });
    }
    req.user = user;
    req.uid = uid;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token no válido",
    });
  }
};

module.exports = {
  ValidarJWT,
};
