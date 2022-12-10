import React from 'react'
import { Box, Button } from '@mui/material'

const Home = () => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			<img
				src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowtechie.com%2Fwhat-is-spotify-live-and-how-does-it-work%2F&psig=AOvVaw1tveml1sP1tDMny1S2Cfr3&ust=1670754248084000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCn4Nvq7vsCFQAAAAAdAAAAABAE"
				alt=""
			/>
			<Button
				size="large"
				variant="contained"
				onClick={() => (window.location.href = 'https://www.academy.techover.nu')}
			>
				Ansök nu!
			</Button>
		</Box>
	)
}

export default Home
