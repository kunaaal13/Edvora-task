import { useEffect } from 'react';
import { useApi } from '../context/fetchData';
import styles from './Filters.module.css';

function DropDown({ setMenu, showMenu }) {
  const { filters, handleFilters } = useApi();

  useEffect(() => {
    function handleCLick({ target }) {
      const menu = document.querySelectorAll('.drop_menu')[0];
      if (!menu.contains(target)) {
        setMenu(true);
      }
    }
    function handleKeyboard({ key }) {
      if (key === 'Escape') {
        setMenu(false);
      }
    }
    //for keyboard interaction
    document.addEventListener('keydown', handleKeyboard);
    document.addEventListener('click', handleCLick);

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
      document.removeEventListener('click', handleCLick);
    };
  }, [setMenu]);

  return (
    <ul
      className={`drop_menu absolute px-7 py-8 z-10 text-base bg-[#131313] top-[22%] right-[8%] rounded-2xl space-y-3 `}
    >
      <li className="text-xl pb-3 border-b-2 border-[#CBCBCB] text-[#A5A5A5]">Filters</li>

      <li>
        <select
          className="w-full bg-[#232323] px-3 py-2 text-white rounded-lg control"
          onChange={({ target }) => handleFilters({ ...filters, state: target.value })}
          value={filters.state}
        >
          <option value="">State</option>
          <option value="Delhi">Delhi</option>
          <option value="Odisha">Odisha</option>
          <option value="Bihar">Bihar</option>
        </select>
      </li>

      <li>
        <select
          className="w-full bg-[#232323] px-3 py-2 text-white rounded-lg control"
          onChange={({ target }) => handleFilters({ ...filters, city: target.value })}
          value={filters.state}
        >
          <option value="">City</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Marhaura">Marhaura</option>
          <option value="Brahmapur">Brahmapur</option>
        </select>
      </li>
    </ul>
  );
}

export default DropDown;
