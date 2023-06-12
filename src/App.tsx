import { Route, Routes } from 'react-router'
import './assets/styles/App.scss'
import Home from './pages/Home/Home'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

export default App
