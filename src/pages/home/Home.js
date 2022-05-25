import React from 'react'
import './home.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const banner_src = 'https://ihsvoice.com/wp-content/uploads/2021/06/XplodeLIAO_attack_on_titan-2-1-637x900.jpg'

export default function Home() {
  return (
    <div className='home'>
	    <div className='top-content'>
		    <img src={banner_src} alt='' className='content-image'/>
		    <div className='content-title'>
			    	<div className='title-top'>
					<h3>Final Season</h3>
					<h1>Attack On Titan</h1>
					<h4>進撃の巨人</h4>
				</div>
				<div className='title-bottom'>
					<button type='button' className='content-btn'><PlayArrowIcon className='playIcon'/><span>Watch</span></button>
				</div>
				
		    </div>
	    </div>
    </div>
  )
}
