import React from 'react';
import IButton from '../Button';

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="w-full shadow">
      <div className="w-full container mx-auto md:px-1 flex items-center justify-between h-[50px]">
        <div className="flex items-center gap-1 cursor-pointer">
          <img className="w-100 h-[50px]" src="/images/logoo.svg" alt="" />
          <span className="text-[13px] uppercase py-1 border border-dashed flex items-center flex-nowrap">
            Thien <i className="bg-black text-white p-1 uppercase">Studio</i>
          </span>
        </div>
        <div className="header-menu-list">
          <ul className="flex items-center gap-5">
            <li>
              <a href="">Docs</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Porpolio</a>
            </li>
          </ul>
        </div>
        <div className="header-options--auth flex gap-3">
          <IButton>Login</IButton>
          <IButton color="primary">Register</IButton>
        </div>
      </div>
    </nav>
  );
};

export default Header;
