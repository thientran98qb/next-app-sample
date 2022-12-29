import React from 'react';
import Header from './Header';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <div className='container mx-auto py-2'>
        {children}
      </div>
    </>
  );
};

export default Layout;
