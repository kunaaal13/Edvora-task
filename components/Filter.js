import Image from 'next/image';
import { useState } from 'react';
import sort from '../public/assets/sort.png';
import { useApi } from '../context/fetchData';
import DropDown from './DropDown';
import styles from './Filters.module.css';

function Filter() {
  const { active } = styles;

  const [showMenu, setShowMenu] = useState(false);
  const { status, handleStatus, selectUpcomingRides, selectPastRides } = useApi();

  // handle classes
  const nearestRide = status === '' ? active : null;
  const upcoming = status === 'upcoming' ? active : null;
  const past = status === 'past' ? active : null;

  // get rides length
  const upcomingCount = selectUpcomingRides().length;
  const pastCount = selectPastRides().length;

  return (
    <div className="text-[#D0CBCB]">
      <div className="px-11 py-4 flex items-center justify-between text-xl">
        <ul className="flex flex-col md:flex-row text-left px-5 items-start justify-center mt-4 font-normal space-y-2 md:space-x-8 md:space-y-0">
          <li onClick={() => handleStatus('')} className={`${nearestRide} cursor-pointer`}>
            Nearest rides
          </li>
          <li
            onClick={() => handleStatus('upcoming')}
            className={`${upcoming} cursor-pointer`}
          >{`Upcoming rides (${upcomingCount})`}</li>
          <li
            onClick={() => handleStatus('past')}
            className={`${past} cursor-pointer`}
          >{`Past rides (${pastCount})`}</li>
        </ul>

        <div
          className="flex cursor-pointer font-medium text-white mt-4"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <span className="w-1/5 mr-2">
            <Image src={sort} alt="" />
          </span>
          Filter
        </div>

        {showMenu ? <DropDown setMenu={setShowMenu} showMenu={showMenu} /> : <></>}
      </div>
    </div>
  );
}

export default Filter;
