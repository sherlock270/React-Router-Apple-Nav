import React from 'react';

let tvList = [
  {name: 'Apple TV 4K', url: 'apple_tv', class: 'firstSubnav'},
  {name: 'Apple TV', url: 'apple_tv'},
  {name: 'TV App', url: 'tvapp'},
  {name: 'Accessories', url: 'accessories'},
  {name: 'Compare', url: 'compare', class: 'lastSubnav'}];

const SubTV = () => {
  return (
    <div className='subnav'>
      {tvList.map(tv => {
        return (
          <div className={`item ${tv.class}`}>
            <img src={`https://www.apple.com/v/tv/home/d/images/home/${tv.url}_dark_large.svg`} alt='product' />
            <span> {tv.name} </span>
          </div>
        )
      })}
    </div>
  )
}

export default SubTV;
