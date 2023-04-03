import { Search } from '../../components/Search/Search';
import { Filter } from '../../components/Filter/Filter';
import { Card } from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';

export const Characters = () => {
  const [activePage, setActivePage] = useState();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [data, setData] = useState([]);
  const { info, results } = data;
  const api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setData(data);
    })();
  }, [api]);

  return (
    <>
      <h2 className='text-center mb-5 mt-2 display-3 fw-semibold'>Characters</h2>
      <Search
        setSearch={setSearch}
        setActivePage={setActivePage}
      />
      <div className='row'>
        <div className='col-3'>
          <Filter
            setSpecies={setSpecies}
            setStatus={setStatus}
            setGender={setGender}
          />
        </div>
        <div className='col-9'>
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
            <h2 className='text-center pt-5 mt-5 text-secondary'>
              Character not found !
            </h2>
          )}
        </div>
      </div>
      <Pagination
        activePage={activePage}
        totalPage={info?.pages}
        setActivePage={setActivePage}
      />
    </>
  );
};
