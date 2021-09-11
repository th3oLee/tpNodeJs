const SongRepository = require("../repositories/song.repository.js");

const SongService = {
  findAll: async () => {
    return await SongRepository.findAll();
  },
  findById: async (id) => {
    const song = await SongRepository.findById(id);
    return song;
  },
  findByName: async (name) => {
    const song = await SongRepository.findByName(name);
    return song;
  },
  create: async (song) => {
    await SongRepository.create(song);
  },
  update: async (id, songInfo) => {
    const song = await SongRepository.findById(id);
    if (!song) {
      throw Error("Song not found");
    }
    await SongRepository.update(id, songInfo);
  },
};

module.exports = SongService;
