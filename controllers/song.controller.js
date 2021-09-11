const SongService = require("../services/song.service");
/**
 * Song controller
 */
const SongController = {
  findAll: async (req, res, next) => {
    const songs = await SongService.findAll();
    res.status(200).send(songs);
  },
  findById: async (req, res, next) => {
    const songId = req.params.id;
    const song = await SongService.findById(songId);
    res.satus(200).send(song);
  },
  findByArtist: async (req, res, next) => {
    const query = req.query.q;
    const song = await SongService.findByName(query);
    res.status(200).send(song);
  },
  create: async (req, res, next) => {
    const song = req.body;
    await SongService.create(song);
    res.status(200).send({ message: "Song created successfully" });
  },
  update: async (req, res, next) => {
    const songId = req.params.id;
    const songInfo = req.body;
    try {
      await SongService.update(songId, songInfo);
      res.status(200).send({ message: "Song updated successfully" });
    } catch (error) {
      res.status(404).send({ message: `Song with id - ${songId} not found` });
    }
  },
};

module.exports = SongController;
