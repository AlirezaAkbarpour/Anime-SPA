import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import {Badge,Button} from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <div className='header'>
	<div className='header-left'>
		<h2 className='header-title'><a href='#'>Anime</a></h2>
		<nav className='header-link'>
			<Link to={'/'}><span className='active'>Home</span></Link>
			<Link to={'genres'}>Genres</Link>
			<Link to={'anime-lists'}>Anime Lists</Link>
			<Link to={'play-list'}>Play List</Link>
		</nav>
	</div>
	<div className='header-right'>
		<div className='header-right-item'>
			<Badge>
				<NotificationsNoneOutlinedIcon/>
			</Badge>
		</div>
		
		<div className='header-right-item'>
			<Badge>
				<SearchIcon />
			</Badge>
		</div>
		
		<div className='header-right-item'>
			<button>Log In</button>
		</div>
	</div>
    </div>
  )
}
