// api/auth
const router = require("express").Router();
const {
  getAllBoard,
  createBoard,
  getBoard,
  updateBoard,
} = require("./board.controller");
// đăng ký, post
router.get("/", getAllBoard);
router.post("/", createBoard);
router.get("/:boardId", getBoard);
router.put("/:boardId", updateBoard);

module.exports = router;
