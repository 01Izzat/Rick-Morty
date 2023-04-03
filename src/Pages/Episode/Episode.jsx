import { Card } from '../../components/Card/Card';
import { Filter } from '../../components/Filter/Filter';
import { useState, useEffect } from 'react';

export const Expisode = () => {

  const [episode, setEpisode] = useState('');
  const [data, setData] = useState([]);
  const [caractersid, setCharactersid] = useState([]);
  const [results, setResults] = useState()
  const api = `https://rickandmortyapi.com/api/episode/${episode.length > 0 ? episode : 1}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data);

      let a = await Promise.all(
        data.characters.map(item => {
          return fetch(item).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);


  return (
    <>
      <h1 className='text-center'>Episode name : <span className='text-primary' >{data.name}</span></h1>
      <p className='text-center fs-4'>Air Date: {data.air_date}</p>
      <div className='d-flex flex-wrap gap-4'>
        <div className='row'>
          <div className='col-3' >
            <form>
              <select className='ml-5 form-select' > 
                <option selected>Filter Episodes</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                <option value="4">6</option>
                <option value="4">7</option>
                <option value="4">8</option>
                <option value="4">9</option>
                <option value="4">10</option>       

              </select>
            </form>
          </div>
          <div className='col-9' >
            {results?.length ? (
              <div className='d-flex flex-wrap gap-4'>
                {results.map((el) => (
                  <Card
                    key={el.id}
                    image={el.image}
                    name={el.name}
                    location={el.location.name}
                    status={el.status}
                    gender={el.gender}
                    id={el.id}
                  />
                ))}
              </div>
            ) : (
              <h2 className='text-center pt-5 mt-5 text-warning'>
                Character not found !
              </h2>
            )}
          </div>
        </div>
      </div>
    </>
  )
}