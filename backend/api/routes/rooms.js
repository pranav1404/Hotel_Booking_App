// Require Libraries
const express = require('express');
const router = express.Router();
const authenticationController = require('../utils/Authentication');

// Rooms Controller
const roomController = require('../controllers/rooms');

// CREATE
router.post("/:hotelid", authenticationController.verifyAdmin, roomController.createRoom);

// UPDATE
router.put("/availability/:id", roomController.updateRoomAvailability);
router.put("/:id", authenticationController.verifyAdmin, roomController.updateRoom);

// DELETE
router.delete("/:id/:hotelid", authenticationController.verifyAdmin, roomController.deleteRoom);

// GET
router.get("/:id", roomController.getRoomById);

// GET ALL
router.get("/", roomController.getAllRooms);

// Export Rooms router
module.exports = router;