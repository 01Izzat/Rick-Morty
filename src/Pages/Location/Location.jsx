import { useState, useEffect } from 'react';
import Cardr from '../../components/Cardr';

export const Location = () => {


  const [location, setLocation] = useState('');
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const api = `https://rickandmortyapi.com/api/location/${location.length > 0 ? location : 1}`
  const [residents, setResidents] = useState(0)
  const a = [];

  useEffect(() => {
    (async () => {
      const data = await fetch(api)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setData(data)
    })()
  }, [api]);


  return (
    <>
      <h1 className='text-center'>Location : <span className='text-primary' >{data.name}</span></h1>
      <p className='text-center fs-4'>Dimension: {data.dimension}</p>
      <p className='text-center'>Type: {data.type}</p>
      <Cardr el={data.residents} />
    </>
  )
}