const express= require("express");
const { getAllSongs, getOneSong, createSong, deleteSong, updateSong } = require("../queries/songs.js")
const { checkName, checkBoolean } = require("../validations/checkSongs.js")
const songs = express.Router();

songs.get("/", async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM songs';

        console.log("Attempting to fetch all songs"); 
        
        const allSongs = await getAllSongs();
        
        console.log("Fetched all songs", allSongs); 

        if (allSongs[0]) {
            console.log("Sending success response"); 
            res.status(200).json({ success: true, data: { payload: allSongs } });
        } else {
            console.log("Sending error response: Failed to get all songs."); 
            res.status(500).json({ success: false, data: { error: "Failed to get all songs." } });
        }
    } catch (error) {
        console.log("An error occurred:", error); 
        res.status(500).json({ success: false, data: { error: "An error occurred." } });
    }
});


songs.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneSong = await getOneSong(id);
    if(oneSong) {
        res.json(oneSong)
    } else {
        res.status(404).json({error: "not found!"})
    }
});


songs.post("/", checkName, checkBoolean, async (req, res) => {
    try {
        const createdSong = await createSong(req.body)
        res.json(createdSong)
    } catch (error) {
         res.status(400).json({error: "Failed to create a song."})
    }
});

songs.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletedSong = await deleteSong(id)
        if (deletedSong) {
            res.status(200).json({success: true, payload: {data: deletedSong}})
            
        } else {
            res.status(404).json("Song failed to be deleted.")
        }
    } catch (error) {
        res.send(error)
    }
})

songs.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedSong = await updateSong(id, req.body);
    if(updatedSong.id) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json("No song found with that id.")
    }
})

module.exports = songs;