export const FilterButton = ({ text, index, name, setState }) => {
  return (
    <div>
      <input
        onClick={() => setState(text)}
        type='radio'
        className='btn-check'
        id={name + '-' + index}
        autoComplete='off'
        name={name}
      />
      <label
        className='btn btn-outline-primary'
        htmlFor={name + '-' + index}
      >
        {text}
      </label>
    </div>
  );
};