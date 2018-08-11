import React from 'react';

const Navbar = props => {
  let navItems = ['mac','ipad','iphone','watch','tv','music','support'];
  console.log(props);
  return (
    <div className='navbar'>
      <i className='fab fa-apple' onClick={() => props.history.push('/')} />
      <p onClick={() => props.history.push('/mac')}>Mac</p>
      <p onClick={() => props.history.push('/ipad')}>iPad</p>
      <p onClick={() => props.history.push('/iphone')}>iPhone</p>
      <p onClick={() => props.history.push('/watch')}>Watch</p>
      <p onClick={() => props.history.push('/tv')}>TV</p>
      <p onClick={() => props.history.push('/music')}>Music</p>
      <p onClick={() => props.history.push('/support')}>Support</p>
      <i className='fab fa-sistrix' />
      <i className='fas fa-shopping-bag' />
    </div>
  )
}

export default Navbar;
