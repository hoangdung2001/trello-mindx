// api/auth
const router = require("express").Router();
const { getAllList, createList, updateLists } = require("./list.controller");
// đăng ký, post
router.get("/:listId", getAllList);
router.post("/", createList);
router.put("/", updateLists);
module.exports = router;
