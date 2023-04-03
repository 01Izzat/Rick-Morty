import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CharacterInfo = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get('https://rickandmortyapi.com/api/character/' + id)
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setCharacter(data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className='btn btn-warning m-5'
      >
        Back
      </button>

      <div className='w-50 mx-auto p-y'>
        <h3 className='text-center'>{character.name}</h3>
        <div className='mx-auto w-50'>
          <img
            className='d-block mx-auto'
            src={character.image}
            alt={character.name}
          />
          {(function () {
            if (character.status === 'Alive') {
              return (
                <p className='d-inline-block rounded w-100 my-3 fs-2 text-center bg-success text-white'>
                  {character.status}
                </p>
              );
            } else if (character.status === 'Dead') {
              return (
                <p className='d-inline-block rounded w-100 my-3 fs-2 text-center bg-danger text-white'>
                  {character.status}
                </p>
              );
            } else {
              return (
                <p className='d-inline-block rounded w-100 my-3 fs-2 text-center bg-secondary text-white'>
                  {character.status}
                </p>
              );
            }
          })()}
          <p className='text-center'>
            <span className='fw-semibold'>Gender:</span> {character.gender}
          </p>
          <p className='mb-3 text-center'>
            <span className='fw-semibold'>Location:</span>{' '}
            {character?.location?.name}
          </p>
          <p className='text-center'>
            <span className='fw-bold'>Species:</span> {character?.origin?.name}{' '}
          </p>
        </div>
      </div>
    </>
  );
};
