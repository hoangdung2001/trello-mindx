// api/auth
const router = require("express").Router();
const authController = require("./auth.controller");
const isAuth = require("../../common/middlewares/isAuth");

// đăng ký, post
router.post("/signup", authController.signUp);
router.post("/login", isAuth, authController.login);
router.get("/login/:username", authController.getToken);

module.exports = router;
