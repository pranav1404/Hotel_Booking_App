// Require Hotel Schema
const Hotel = require('../models/Hotel');
const Room = require('../models/Rooms');

// Create Hotel Controller
module.exports.createHotel = async (req, res, next) => {
    // console.log(req.body);
    try {
        const newHotel = await Hotel.create(req.body);    
        res.status(200).json(newHotel);
    } catch (error) {
        next(error);
    }
}

// Update Hotel Controller
module.exports.updateHotel = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new : true});    
        res.status(200).json(updatedHotel);
    } catch (error) {
        next(error);    
    }
}

// Delete Hotel Controller
module.exports.deleteHotel = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        await Hotel.findByIdAndDelete(req.params.id);    
        res.status(200).json("Hotel Has been deleted");
    } catch (error) {
        next(error);
    }
}

// Get Hotel By Id Controller
module.exports.getHotelById = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const hotel  = await Hotel.findById(req.params.id);    
        res.status(200).json(hotel);
    } catch (error) {
        next(error);
    }
}

// Get All hotels Controller
module.exports.getAllHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 9999999 },
        }).limit(req.query.limit);
        console.log("hello")
        res.status(200).json(hotels);
    } catch (error) {
        next(error);
    }
}

module.exports.getTypeHotels = async (req, res, next) => {
  const { type, ...others } = req.query;
  try {
      const hotels = await Hotel.find({
      ...others,
      // cheapestPrice: { $gt: min | 1, $lt: max || 9999999 },
      type: "hotel" ,
      }).limit(req.query.limit);
      console.log(hotels);
      // console.log("hello")
      res.status(200).json(hotels);
  } catch (error) {
      next(error);
  }
}


module.exports.countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (error) {
      next(error);
    }
  };

  module.exports.countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (error) {
      next(error);
    }
  };