import Image from 'next/image';
import React from 'react';
import logo from '../public/assets/logo.svg';
import { useApi } from '../context/fetchData';

function Header() {
  const { user } = useApi();
  return (
    <header className="bg-black text-white">
      <div className="components py-1">
        <div className="flex items-center justify-between">
          <div className="mt-4 max-w-[114px]">
            <Image src={logo} alt="" />
          </div>

          <div className="flex items-center ">
            <h3 className="text-xl font-bold">{user.name}</h3>

            <div className="h-11 w-11 ml-7 ">
              <img src={user.url} alt="" className="w-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
