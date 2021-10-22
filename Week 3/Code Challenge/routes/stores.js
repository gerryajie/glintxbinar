const express = require("express");

const {
  getAllStores,
  getDetailStore,
  addStore,
  updateStore,
  deleteStore,
} = require("../controllers/stores");
const router = express.Router();

router.get("/", getAllStores);

router.get("/:id", getDetailStore);

router.post("/", addStore);

router.put("/:id", updateStore);

router.delete("/:id", deleteStore);

module.exports = router;
