import React from 'react';

let musicList = [
  {name: 'Apple Music', url: 'apple_music', class: 'firstSubnav'},
  {name: 'iTunes', url: 'itunes'},
  {name: 'HomePod', url: 'homepod_icon'},
  {name: 'iPod touch', url: 'ipod_touch_light'},
  {name: 'Music Accessories', url: 'accessories'},
  {name: 'Gift Cards', url: 'gift_cards', class: 'lastSubnav'}];

const SubMusic = () => {
  return (
    <div className='subnav'>
      {musicList.map(music => {
        return (
          <div className={`item ${music.class}`}>
            <img src={`https://www.apple.com/v/music/g/images/overview/icons/${music.url}_large.svg`} alt='product' />
            <span> {music.name} </span>
          </div>
        )
      })}
    </div>
  )
}

export default SubMusic;
