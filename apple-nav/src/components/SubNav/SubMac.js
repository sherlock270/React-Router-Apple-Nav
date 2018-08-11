import React from 'react';

let macList = [{name: 'MacBook', url: 'macbook'},
 {name: 'MacBook Air', url: 'macbookair'},
 {name: 'MacBook Pro', url: 'macbookpro'},
 {name: 'iMac', url: 'imac'},
 {name: 'iMac Pro', url: 'imac_pro'},
 {name: 'Mac Pro', url: 'macpro'},
 {name: 'Mac Mini', url: 'macmini'},
 {name: 'Accessories', url: 'mac_acc'},
 {name: 'High Sierra', url: 'mac_osx'},
 {name: 'Compare', url: 'mac_comp'}];

const SubMac = () => {
  return (
    <div className='subnav'>
      {macList.map(mac => {
        return (
          <div className='item'>
            <img src={`https://www.apple.com/v/mac/home/ab/images/familybrowser/${mac.url}_dark_large.svg`} alt='product' />
            <span> {mac.name} </span>
          </div>
        )
      })}
    </div>
  )
}

export default SubMac;

[{name: 'MacBook', url: 'macbook'},
 {name: 'MacBook Air', url: 'macbookair'},
 {name: 'MacBook Pro', url: 'macbookpro'},
 {name: 'iMac', url: 'imac'},
 {name: 'iMac Pro', url: 'imacpro'},
 {name: 'Mac Pro', url: 'macpro'},
 {name: 'Mac Mini', url: 'macmini'},
 {name: 'Accessories', url: 'accessories'},
 {name: 'High Sierra', url: 'mac_osx'},
 {name: 'Compare', url: 'mac_comp'}];
