import { useState } from 'react'
import Input from '../Input/Input'
import Title from '../Title/Title'
import classes from './TodoList.module.scss'
import ActiveButton from '../ActiveButton/ActiveButton'
import { getUniqueId } from '../../utils/getUniqueId'
import TextWarning from '../TextWarning/TextWarning'
import ItemTodoList from '../ItemTodoList/ItemTodoList'

export interface ITask {
	id: number
	text: string
	isDone: boolean
}

const TodoList = () => {
	const [task, setTask] = useState<string>('')
	const [tasks, setTasks] = useState<ITask[]>([])

	function createTask() {
		if (task.trim() === '') return

		const createdTask: ITask = {
			id: getUniqueId(),
			text: task.trim(),
			isDone: false,
		}

		setTasks(p => [...p, createdTask])
		setTask('')
	}

	function updateTask(task: ITask) {
		const updatedTask = tasks.map(item => {
			if (item.id === task.id) {
				item.isDone = !item.isDone
			}

			return item
		})

		setTasks(updatedTask)
	}

	return (
		<div className={classes.todolist}>
			<Title>Tasks</Title>
			<div>
				{tasks
					.filter(t => !t.isDone)
					.map(t => (
						<ItemTodoList
							key={t.id}
							isDone={t.isDone}
							setIsDone={updateTask}
							task={t}
						/>
					))}
			</div>
			<Title>Completed</Title>
			<div>
				{tasks
					.filter(t => t.isDone)
					.map(t => (
						<ItemTodoList
							key={t.id}
							isDone={t.isDone}
							setIsDone={updateTask}
							task={t}
						/>
					))}
			</div>
			<div className={classes.wrapperCreateTask}>
				<Input
					value={task}
					placeholder='Your task'
					onChange={e => setTask(e.target.value)}
					onKeyDown={e => {
						if (e.key === 'Enter') createTask()
					}}
				/>
				<ActiveButton onClick={createTask}>Add</ActiveButton>
			</div>
		</div>
	)
}

export default TodoList
