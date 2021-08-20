import React from 'react';
import Header from './Header';

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      <section className="main">
        <div className="main__wrapper">
          {children}
        </div>
      </section>
    </>
  )
}

export default Wrapper
