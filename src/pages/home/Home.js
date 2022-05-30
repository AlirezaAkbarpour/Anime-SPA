import React from 'react'
import './home.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import home_poster_h from '.././../images/home_poster_h.jpg';
import home_poster_v from '.././../images/home_poster_v.jpg';
import home_anime_banner from '.././../images/home_anime_banner.jpg'

export default function Home() {
  return (
    <div className='home'>
	    <div className='top-content'>
		    <img src={home_anime_banner} alt='' className='content-image'/>
		    <div className='content-title'>
			    	<div className='title-top'>
					<h3>Final Season</h3>
					<h1 title='Attack On Titan'>Attack On Titan</h1>
					<h4>進撃の巨人</h4>
				</div>
				<div className='title-bottom'>
					<button type='button' className='content-btn'><PlayArrowIcon className='playIcon'/><span>Watch</span></button>
				</div>
		    </div>
	    </div>
	    <div className='album'>
		    <div className='imgrow'>
			    <img src={home_poster_h} alt='' width={'320px'} height={'280px'} loading='lazy' className='img−horizontal'/>
			    <img src={home_poster_v} alt=''  width={'280px'} height={'360px'} loading='lazy' className='img−vertical'/>
		    </div>
	    </div>
    </div>
  )
}
