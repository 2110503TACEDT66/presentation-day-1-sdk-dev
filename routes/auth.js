const express = require("express");
const { register, reset, login, deleteUser, getMe, logout } = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.put("/reset", protect, reset);
router.delete("/deleteUser", protect, deleteUser);
router.post("/login", login);
router.get("/me", protect, getMe);
router.get("/logout", logout);

module.exports = router;
