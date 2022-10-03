const { Router } = require("express");
const { getUser, deleteUser, postUser, putUser } = require("../controllers/userControler");
const router = Router();


router.get("/", getUser);
router.delete("/",deleteUser);
router.post("/", postUser);
router.put("/:id", putUser);


module.exports = router;
