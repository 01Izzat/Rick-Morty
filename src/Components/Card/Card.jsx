import { Link } from 'react-router-dom';
import {FiHeart} from "react-icons/fi";

export const Card = ({ image, name, location, status, id, gender }) => {
  return (
    <div
      className='card position-relative'
      style={{ width: '18rem' }}
    >
      {(function () {
        if (status === 'Alive') {
          return (
            <span
              style={{ top: '10px', right: '10px' }}
              className='position-absolute badge bg-success px-3 py-2'
            >
              {status}
            </span>
          );
        } else if (status === 'Dead') {
          return (
            <span
              style={{ top: '10px', right: '10px' }}
              className='position-absolute badge bg-danger px-3 py-2'
            >
              {status}
            </span>
          );
        } else {
          return (
            <span
              style={{ top: '10px', right: '10px' }}
              className='position-absolute badge bg-secondary px-3 py-2'
            >
              {status}
            </span>
          );
        }
      })()}
      <img
        src={image}
        className='card-img-top'
        alt={name}
      />
      <div className='card-body pb-0'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text m-0 fs-5'>{gender}</p>
        <p className='card-text fs-6'>{location}</p>

        <div className='d-flex gap-5'>
          <Link
            to={`/characters/${id}`}
            className='btn btn-primary me-5'
          >
            More
          </Link>
          <Link className='btn btn-danger ms-5'> <FiHeart/> </Link>
        </div>
      </div>
    </div>
  );
};
