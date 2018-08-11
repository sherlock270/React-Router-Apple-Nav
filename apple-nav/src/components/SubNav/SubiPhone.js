import React from 'react';

let iphoneList = [
  {name: 'iPhone X', url: 'iphonex', class: 'firstSubnav'},
  {name: 'iPhone 8', url: 'iphone8'},
  {name: 'iPhone 7', url: 'iphone7'},
  {name: 'iPhone 6s', url: 'iphone6s'},
  {name: 'iPhone SE', url: 'iphonese'},
  {name: 'iOS 11', url: 'iphone_ios'},
  {name: 'Accessories', url: 'iphone_acc'},
  {name: 'Compare', url: 'iphone_comp', class: 'lastSubnav'}];

const SubiPhone = () => {
  return (
    <div className='subnav'>
      {iphoneList.map(iphone => {
        return (
          <div className={`item ${iphone.class}`}>
            <img src={`https://www.apple.com/v/iphone/home/x/images/chapternav/${iphone.url}_large.svg`} alt='product' />
            <span> {iphone.name} </span>
          </div>
        )
      })}
    </div>
  )
}

export default SubiPhone;
