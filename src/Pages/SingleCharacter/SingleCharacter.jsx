import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const SingleCharacter = () => {
  const [singleCharacter, setSingleCharacter] = useState({});
  const { id } = useParams();
  const backNavigate = useNavigate();

  console.log(singleCharacter);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/' + id)
      .then((data) => {
        console.log(data);
        if (data.status == 200) {
          setSingleCharacter(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <button
        onClick={() => backNavigate(-1)}
        className='btn btn-danger'
      >
        Back
      </button>
      <div className='row justify-content-center'>
        <div className='col-4 mt-2 rounded position-relative text-center p-0'>
          {(function () {
            if (singleCharacter.status == 'Alive') {
              return (
                <span
                  style={{ bottom: '155px', right: '65px' }}
                  className='position-absolute badge bg-success px-3 py-3'
                >
                  {singleCharacter.status}
                </span>
              );
            }
            if (singleCharacter.status == 'Dead') {
              return (
                <span
                  style={{ bottom: '155px', right: '65px' }}
                  className='position-absolute badge bg-danger px-3 py-3'
                >
                  {singleCharacter.status}
                </span>
              );
            }
            if (singleCharacter.status == 'unknown') {
              return (
                <span
                  style={{ bottom: '155px', right: '65px' }}
                  className='position-absolute badge bg-secondary px-3 py-3'
                >
                  {singleCharacter.status}
                </span>
              );
            }
          })()}
          <img
            
            width={'330px'}
            className='rounded'
            src={singleCharacter.image}
            alt=''
            height='330px'
          />
          <h5 className='my-3'>Character Name: {singleCharacter.name}</h5>
          <p className='fs-5 fw-semibold '>gender: {singleCharacter.gender}</p>
          <p className='fs-5 fw-semibold' >Species: {singleCharacter.species}</p>
        </div>
      </div>
    </>
  );
};
