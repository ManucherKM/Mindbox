import ActiveButton from '../../components/ActiveButton/ActiveButton'
import CheckBox from '../../components/CheckBox/CheckBox'
import Input from '../../components/Input/Input'
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
