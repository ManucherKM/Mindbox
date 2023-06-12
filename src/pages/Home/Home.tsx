import TodoList from '../../components/TodoList/TodoList'
import classes from './Home.module.scss'

const Home = () => {
	return (
		<div className={classes.home}>
			<TodoList />
		</div>
	)
}

export default Home
