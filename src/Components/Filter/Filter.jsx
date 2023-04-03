import  React  from "react";
import { FilterButton } from './../FilterBTN/FilterBtn';
import './main.css'

export const Filter = ({ setStatus, setGender, setSpecies }) => {
  const statusData = ['alive', 'dead', 'unknown'];
  const genderData = ['male', 'female', 'unknown', 'genderless'];
  const speciesData = [
    'human',
    'alien',
    'humanoid',
    'poopybutthole',
    'unknown',
    'animal',
    'robot',
    'cronenberg',
  ];
  return (
    <div>
      <h3 className='text-center'>Filter</h3>
      <p
        onClick={()=> window.location.reload()}
        className='clear'
      >
        clear all
      </p>
      <div
        className='accordion'
        id='accordionExample'
      >
        <div className='accordion-item '>
          <h2
            className='accordion-header'
            id='headingOne'
          >
            <button
              className='accordion-button fw-bold fst-italic'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Filter by status
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              {statusData.map((item, index) => (
                <FilterButton
                  setState={setStatus}
                  text={item}
                  index={index}
                  key={index}
                  name='status'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2
            className='accordion-header'
            id='headingTwo'
          >
            <button
              className='accordion-button collapsed fw-bold fst-italic'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Filter by species
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              {speciesData.map((item, index) => (
                <FilterButton
                  setState={setSpecies}
                  key={index}
                  text={item}
                  index={index}
                  name='species'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2
            className='accordion-header'
            id='headingThree'
          >
            <button
              className='accordion-button collapsed fw-bold fst-italic'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Filter by gender
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              {genderData.map((item, index) => (
                <FilterButton
                  setState={setGender}
                  text={item}
                  index={index}
                  key={index}
                  name='gender'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};