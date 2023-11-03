const db = require("../db/dbConfig");

const getAllReviews = async (songs_id) => {
    try {
        /*Query to 'SELECT' all columns from the reviews table that match song id 'await' response store results in allReviews*/
        const allReviews = await db.any("SELECT * FROM reviews WHERE songs_id=$1",
        songs_id
        );
        return allReviews
    } catch(err) {
        return err
    }
}

const getOneReview = async (id) => {
    try {
        /*query to 'Select' one review form the table that matches the song id and store the results in the oneReview*/
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneReview
    } catch (error){
        return error
    }
}

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one('SELECT 8 FROM WHERE id=$1 RETURNING *', id);
        return deletedReview
    } catch (err) {
        return err
    }
}

const createReview = async () => {
    try {
        const createdReview = await db.one('INSERT INTO reviews (reviewer, rating, content, title, song_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [reviewer, rating, content, title, song_id]
        );
        return createdReview
    } catch (err) {
        return err
    }
}

const updateReview = async (review) => {
    try {
        /* destructure review object extracts values and assign constants to them with the following properties:*/
        const { reviewer, rating, content, title,id, song_id } = review;
        /*stores the results of the operation query and return just 1 row from the db*/
        const updatedReview = await db.one('UPDATE reviews SET reviewer=$1, rating=$2, content=$3, title$4, song_$5, WHERE id=$6 RETURNING *', 
        /*updates the table setting the columns to the following values where the id matches the id variable then returning the entire updated row*/
        [reviewer, rating, content, title, song_id, id])
    } catch (err) {
        return err
    }
}




module.exports = {
    getAllReviews,
    getOneReview,
    deleteReview,
    createReview,
    updateReview
}