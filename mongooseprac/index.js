const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/shubham")
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    });
const PlaylistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
});
const Playlist = new mongoose.model("Playlist", PlaylistSchema);
const reactPlaylist = new Playlist({
    name: "reactPlaylist",
    age: 25,
    gender: "male",
});
const createDocument = async() => {
    try {
        const shubham = new Playlist({
            name: "shubham",
            age: 25,
            gender: "male",
        });
        const ankit = new Playlist({
            name: "ankit",
            age: 24,
            gender: "male",
        });
        const result = await Playlist.insertMany([shubham, ankit]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};
// createDocument();
const getDocument = async() => {
    try {
        const res = await Playlist.find();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
getDocument();