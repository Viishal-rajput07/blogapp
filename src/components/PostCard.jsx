import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'


function PostCard({ $id, title, image, description }) {

  // Define the maximum number of characters to display
  const MAX_DESCRIPTION_LENGTH = 60;

  // Function to shorten the description text and add '...' if necessary
  const shortenDescription = (fullDescription, maxLength) => {
    if (fullDescription.length <= maxLength) {
      return fullDescription;
    }
    return fullDescription.slice(0, maxLength) + '...';
  };

  // Get the shortended version of the description
  const shortenedDescription = shortenDescription(description, MAX_DESCRIPTION_LENGTH);

  return (
    <Link to={`/post/${$id}`}>
      <div className="card card-compact bg-base-100 shadow-xl mb-10">
        <figure
          className='h-96'
          >
          <img 
            src={service.getFilePreview(image)} alt={title} />
        </figure>
        <div className="card-body h-40">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <div className='w-64'>{parse(shortenedDescription)}</div>
          <div className="card-actions justify-end absolute bottom-2 right-2">
            
            <button className="btn btn-sm btn-primary duration-200 hover:bg-blue-600 ">Visit Post</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard

