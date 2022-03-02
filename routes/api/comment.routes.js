const router = require("express").Router();
const {
  addComment,
  removeComment,
} = require("../../controllers/comment-controller");

router.route("/:pizzaId").post(addComment);
router.route("/:pizzId/:commentId").delete(removeComment);

module.exports = router;
