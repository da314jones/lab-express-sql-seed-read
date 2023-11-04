import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ReviewForm({ reviewDetails, handleSubmit, toggleView, children }) {
    let { id } = useParams();
const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    song_id: id,
});

const handleTextChange = (e) => {
    setReview({ ...review, [e.target.id]: e.target.value });
};

useEffect(() => {
    if (reviewDetails) {
        setReview(reviewDetails);
    }
}, [id, reviewDetails]);

const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(review, id);
    if (reviewDetails) {
        toggleView();
    }
    setReview({
        reviewer: "",
        title: "",
        content: "",
        rating: "",
        song_id: id,
    });
    console.log("what is going on");
}

  return (
    <div className="Edit">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="reviewer">Name:</label>
        <input
          id="reviewer"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={review.title}
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          required
          placeholder="Please enter value between 0 and 5"
          value={review.rating}
          onChange={handleTextChange}
        />
        <label htmlFor="content">Review:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={review.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}
