
const express = require('express');
const router = express.Router();
const authenticationController = require('../utils/Authentication');
// Require Hotel Controller
const hotelController = require('../controllers/hotels');

// CREATE
router.post("/", authenticationController.verifyAdmin, hotelController.createHotel);

// UPDATE
router.put("/:id", authenticationController.verifyAdmin, hotelController.updateHotel);

// DELETE
router.delete("/:id", authenticationController.verifyAdmin, hotelController.deleteHotel);

// GET
router.get("/find/:id", hotelController.getHotelById);

// GET ALL
router.get("/", hotelController.getAllHotels);
router.get("/countByCity", hotelController.countByCity);
router.get("/countByType", hotelController.countByType);
router.get("/room/:id", hotelController.getHotelRooms);
router.get("/getTypeHotels", hotelController.getTypeHotels);

// Export Hotel router
module.exports = router;