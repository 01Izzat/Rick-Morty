import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='py-4 shadow'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <NavLink className='text-decoration-none text-success display-6 fw-semibold text' to='/'>Rick and Morty</NavLink>
          <nav>
            <ul className='d-flex align-items-center list-unstyled m-0'>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'fs-5  text-info text-decoration-none'
                      : 'fs-6 text-dark text-decoration-none'
                  }
                  to='/'
                >
                  Characters
                </NavLink>
              </li>
              <li className='mx-3'>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'fs-5 text-info text-decoration-none'
                      : 'fs-6 text-dark text-decoration-none'
                  }
                  to='/location'
                >
                  Location
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'fs-5 text-info text-decoration-none'
                      : 'fs-6 text-dark text-decoration-none'
                  }
                  to='/episodes'
                >
                  Episode
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
