const Hotel = require('../models/Hotel');
const Room = require('../models/Rooms');

// Create Room Controller
module.exports.createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
        });
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
}

module.exports.updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (error) {
      next(error);
    }
  };

// Update Hotel Controller
module.exports.updateRoom = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new : true});    
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);    
    }
}

// Delete Hotel Controller
module.exports.deleteRoom = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (error) {
        next(error);
      }
      res.status(200).json("Room has been deleted.");
    } catch (error) {
      next(error);
    }
}

// Get Hotel By Id Controller
module.exports.getRoomById = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const room  = await Room.findById(req.params.id);    
        res.status(200).json(room);
    } catch (error) {
        next(error);
    }
}

// Get All hotels Controller
module.exports.getAllRooms = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const allRooms  = await Room.find();    
        res.status(200).json(allRooms);
    } catch (error) {
        next(error);
    }
}

