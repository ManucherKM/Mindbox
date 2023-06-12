import { useMemo, useState } from 'react'
import { getUniqueId } from '../../utils/getUniqueId'
import ActiveButton from '../ActiveButton/ActiveButton'
import Input from '../Input/Input'
import ItemTodoList from '../ItemTodoList/ItemTodoList'
import TextWarning from '../TextWarning/TextWarning'
import Title from '../Title/Title'
import classes from './TodoList.module.scss'

export interface ITask {
	id: number
	text: string
	isDone: boolean
}

const TodoList = () => {
	const [task, setTask] = useState<string>('')
	const [tasks, setTasks] = useState<ITask[]>([])

	const completedTasks = useMemo(() => {
		return tasks.filter(t => t.isDone)
	}, [tasks])

	const outstandingTasks = useMemo(() => {
		return tasks.filter(t => !t.isDone)
	}, [tasks])

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

	function removeTask(task: ITask) {
		const updatedTask = tasks.filter(item => item.id !== task.id)
		setTasks(updatedTask)
	}

	return (
		<div className={classes.todolist}>
			<Title>Tasks</Title>
			<div>
				{outstandingTasks.length ? (
					outstandingTasks.map(t => (
						<ItemTodoList
							key={t.id}
							isDone={t.isDone}
							setIsDone={updateTask}
							removeTask={removeTask}
							task={t}
						/>
					))
				) : (
					<div className={classes.wrapperNotFound}>
						<TextWarning>Not Found</TextWarning>
					</div>
				)}
			</div>
			<Title>Completed</Title>
			<div>
				{completedTasks.length ? (
					completedTasks.map(t => (
						<ItemTodoList
							key={t.id}
							isDone={t.isDone}
							setIsDone={updateTask}
							removeTask={removeTask}
							task={t}
						/>
					))
				) : (
					<div className={classes.wrapperNotFound}>
						<TextWarning>Not Found</TextWarning>
					</div>
				)}
			</div>
			<div className={classes.wrapperCreateTask}>
				<Input
					value={task}
					placeholder="Your task"
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
