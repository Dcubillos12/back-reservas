const Reserve = require("../models/Rerserve");

module.exports = {
  getAllReserves: async () => {
    const reserves = await Reserve.find();
    return reserves;
  },
  getReserveById: async (id) => {
    const reserve = await Reserve.findById(id);
    return reserve;
  },
  createReserve: async (reserve) => {
    const newReserve = await Reserve.create(reserve);
    return newReserve;
  },
  deleteReserve: async (id) => {
    const deletedReserve = await Reserve.findByIdAndDelete(id);
    return deletedReserve;
  },
  updateReserve: async ({ id, fecha, hora, mesa }) => {
    const updatedReserve = await Reserve.findByIdAndUpdate(
      id,
      { fecha, hora, mesa },
      { new: true }
    );
    return updatedReserve;
  },
};
