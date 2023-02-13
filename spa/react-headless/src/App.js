import React, { useEffect, useState } from 'react'
import './App.css'
import { events } from './helpers/AppHelpers'
import PageLoader from './helpers/PageLoader'
import Header from './components/Header'

function App() {
	const [pathname, setPathname] = useState(window.location.pathname)

	useEffect(() => {
		function handlePopstate() {
			setPathname(window.location.pathname)
		}

		events.on('popstate', handlePopstate)
		window.addEventListener('popstate', handlePopstate)

		return () => {
			events.removeListener('popstate', handlePopstate)
			window.removeEventListener('popstate', handlePopstate)
		}
	}, [])

	return (
		<>
			<PageLoader pathname={pathname} />
		</>
	)
}

export default App
