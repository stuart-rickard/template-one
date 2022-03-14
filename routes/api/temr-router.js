const router = require("express").Router();
const {
  createDocument,
  readAllDocuments,
  updateDocumentById,
  deleteDocumentById,
} = require("../../controllers/temc-controller");

// /api/temr
router.route("/").post(createDocument).get(readAllDocuments);
router.route("/:id").put(updateDocumentById).delete(deleteDocumentById);

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
