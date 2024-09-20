const reserveService = require("../services/reserveService");

module.exports = {
  getAllReserves: async (req, res) => {
    const reserves = await reserveService.getAllReserves();
    res.status(200).json(reserves);
  },
  getReserveById: async (req, res) => {
    const { id } = req.params;
    const reserve = await reserveService.getReserveById(id);
    res.status(200).json(reserve);
  },
  createReserve: async (req, res) => {
    const { fecha, hora, mesa } = req.body;
    const newReserve = await reserveService.createReserve({
      fecha,
      hora,
      mesa,
    });
    res.status(201).json(newReserve);
  },
  deleteReserve: async (req, res) => {
    const { id } = req.params;
    const deletedReserve = await reserveService.deleteReserve(id);
    res.status(200).json(deletedReserve);
  },

  updateReserve: async (req, res) => {
    const { id } = req.params;
    const { fecha, hora, mesa } = req.body;
    const updatedReserve = await reserveService.updateReserve({
      id,
      fecha,
      hora,
      mesa,
    });
    res.status(200).json(updatedReserve);
  },
};
