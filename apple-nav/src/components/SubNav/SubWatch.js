import React from 'react';

let watchList = [
  {name: 'Apple Watch Series 3', url: 'series_2'},
  {name: 'Apple Watch Nike+', url: 'nike'},
  {name: 'Apple Watch Hermes', url: 'hermes'},
  {name: 'Apple Watch Edition', url: 'edition'},
  {name: 'Apple Watch Series 1', url: 'series_1'},
  {name: 'watchOS', url: 'watch_os'},
  {name: 'Bands', url: 'bands'},
  {name: 'Accessories', url: 'accessories'},
  {name: 'Compare', url: 'compare'}];

const SubWatch = () => {
  return (
    <div className='subnav'>
      {watchList.map(watch => {
        return (
          <div className={`item ${watch.class}`}>
            <img src={`https://www.apple.com/v/watch/home/i/images/watch_nav_${watch.url}_large.svg`} alt='product' />
            <span> {watch.name} </span>
          </div>
        )
      })}
    </div>
  )
}

export default SubWatch;
