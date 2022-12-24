const usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const user = await usuario.findOne({ correo });
    if (!user) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - correo",
      });
    }

    if (!user.estado) {
      return res.status(400).json({
        msg: "Este usuario no esta activo",
      });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - password",
      });
    }

    const token = await generarJWT(user._id);

    res.status(200).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  login,
};
