export const Search = ({ setSearch, setActivePage }) => {
  return (

    <input
    onChange={(evt) => {
      setActivePage(1);
      setSearch(evt.target.value);
    }}
    className='w-50 ps-4 form-control rounded-pill mx-auto mb-5'
    type='search'
    placeholder='Search Characters'
    />
    );
};
