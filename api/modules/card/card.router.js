// api/auth
const router = require("express").Router();
const {
  getAllCard,
  createCard,
  updateCards,
  update,
} = require("./card.controller");
// đăng ký, post
router.get("/:boardId/:listId", getAllCard);
router.post("/", createCard);
router.put("/", updateCards);
router.put("/update", update);
module.exports = router;
