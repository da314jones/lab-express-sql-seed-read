import React, { useState } from 'react'
import ReviewForm from './ReviewForm';

export default function Review({
    review, handleDelete, handleEdit 
}) {
    const [viewEditForm, setEditForm] = useState(false);

    const toggleView = () => {
        setEditForm(!viewEditForm);
    };

  return (
//     <div className='review'>
//       {viewEditForm ? (
//         <>
//           <ReviewForm
//             reviewDetails={review}
//             toggleView={toggleView}
//             handleSubmit={handleEdit}
//           />
//           <button onClick={toggleView}>
//             {viewEditForm ? "Cancel" : "Edit this review"}
//           </button>
//         </>
//       ) : (
//         <>
//           <h4>
//             {review.title}
//             <span>{review.rating}</span>
//           </h4>
//           <h5>{review.reviewer}</h5>
//           <p>{review.content}</p>
//           <button onClick={toggleView}>
//             {viewEditForm ? "Cancel" : "Edit this review"}
//           </button>
//           <button onClick={() => handleDelete(review.id)}>Delete</button>
//         </>
//       )}
//     </div>
//   )


<div className='review'>
      {viewEditForm ? (
          <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleEdit}
        />
        ) : (
            <>
          <h4>
            {review.title}
            <span> {review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
        </>
      )}
      <button onClick={toggleView}>
        {viewEditForm ? "Cancel" : "Edit this review"}
      </button>
      {!viewEditForm && (
          <button onClick={() => handleDelete(review.id)}>Delete</button>
          )}
    </div>
  )
        }