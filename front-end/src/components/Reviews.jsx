import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Review from './Review';
import ReviewForm from './ReviewForm';

const API = process.env.REACT_APP_API;


export default function Reviews() {
    const [reviews, setReviews] = useState();
    let { id } = useParams();

    useEffect(() => {
        fetch(`${API}/songs/${id}/reviews`)
          .then((res) => res.json())
          .then((results) => {
            const { payload: reviewsData } = results.data;
            setReviews(reviewsData);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id, API]);

      const handleAdd = (newReview) => {
        fetch(`${API}/songs/${id}/reviews`, {
            method: "POST",
            body:JSON.stringify(newReview),
            headers: {
              "Content-Type": "application/json",  
            }
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            setReviews([...reviews, responseJSON]);
        })
        .catch((error) => console.log(error));
      };

      const handleDelete = (reviewId) => {
        fetch(`${API}/songs/${id}/reviews`${reviewId}, { method: "DELETE" })
        .then((response) => {
            const copyReviewArray = [...reviews];
            const indexDeletedReviews = copyReviewArray.findIndex((review) => review.id === reviewId);
        ;
        console.log(reviewId, indexDeletedReviews);
        copyReviewArray.splice(indexDeletedReviews, 1);
        console.log("NEW REVIEWS",
        copyReviewArray);
        setReviews(copyReviewArray);
      })
      .catch((error) => console.log(error));
    };

    const handleEdit = (updatedReview) => {
        fetch(`${API}/songs/${id}/reviews/${updatedReview.id}`, {
            method: "PUT",
            body: JSON>stringify(updatedReview),
            headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .then(responseJSON => {
            const copyReviewArray = [...reviews]
            const indexUpdatedReview = copyReviewArray.findIndex(review => {
                return review.id === updatedReview.id
            })
            copyReviewArray[indexUpdatedReview] = responseJSON
            setReviews(copyReviewArray)
        })
    }

  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>
      {reviews.map((review) => (
        <Review key={review.id} review={review} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </section>
  )
}
