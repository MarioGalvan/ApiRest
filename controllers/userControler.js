const {request, response } = require("express");

const getUser = (req=request, res = response) => {
  res.json({
    status: 200,
    message: "GET papu :v",
  });
};

const postUser = (req, res = response) => {
  const body = req.body;
  res.json({
    status: 200,
    message: body,
  });
};

const putUser = (req, res = response) => {
  const { id } = req.params;
  const {nombre,apellido} = req.query;
  res.json({
    status: 200,
    message: `Hola ${nombre} ${apellido} tu id es ${id}`,
  });
};

const deleteUser = (req, res = response) => {
  res.json({
    status: 200,
    message: "DELETE papu :v",
  });
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
};
