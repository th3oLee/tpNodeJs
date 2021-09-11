const express = require("express");
const SongRouter = express.Router();
const SongController = require("../controllers/song.controller");

const API_SONGS_PARAM = `/:id`;
const API_SONGS_QUERY = `/search`;

// Begin Router
SongRouter
    .route("/")
    .get(SongController.findAll)
    .post(SongController.create);

SongRouter.route("/artists").get(SongController.findByArtist);

SongRouter
    .route("/:id")
    .get(SongController.findById)
    .put(SongController.update);

// end Router
module.exports = SongRouter;
