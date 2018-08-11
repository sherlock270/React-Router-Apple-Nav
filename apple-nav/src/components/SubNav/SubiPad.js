import React from 'react';

let ipadList = [
  {name: 'iPad Pro', url: 'ipadpro_light', class: 'firstSubnav'},
  {name: 'iPad', url: 'ipad'},
  {name: 'iPad mini 4', url: 'ipadmini'},
  {name: 'iOS 11', url: 'ipad_ios10'},
  {name: 'Accessories', url: 'ipad_acc'},
  {name: 'Compare', url: 'ipad_comp', class: 'lastSubnav'}];

const SubiPad = () => {
  return (
    <div className='subnav'>
      {ipadList.map(ipad => {
        return (
          <div className={`item ${ipad.class}`}>
            <img src={`https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/${ipad.url}_large.svg`} alt='product' />
            <span> {ipad.name} </span>
          </div>
        )
      })}
    </div>
  )
}

export default SubiPad;
