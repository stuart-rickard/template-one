const router = require("express").Router();
const { newData } = require("../../controllers/example-controller");

// const newData = function () {
//   console.log("inside newData");
// };

// /api/example
router.route("/").post(newData);

// router.route("/").get((req, res) => {
//   res.send("hello there");

// res.sendFile(path.join(__dirname, "../../public/home.html"));

// });

// // /api/comments/<pizzaId>/<commentId>
// router
//   .route('/:pizzaId/:commentId')
//   .put(addReply)
//   .delete(removeComment);

// // /api/comments/<pizzaId>/<commentId>/<replyId>
// router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;
