import { FC, HTMLAttributes } from 'react'
import classes from './ItemTodoList.module.scss'
import CheckBox from '../CheckBox/CheckBox'
import { ITask } from '../TodoList/TodoList'

export interface IItemTodoList
	extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
	task: ITask
	isDone: boolean
	setIsDone: (task: ITask) => void
}

const ItemTodoList: FC<IItemTodoList> = ({
	isDone,
	task,
	setIsDone,
	...props
}) => {
	return (
		<div className={classes.itemTodoList} {...props}>
			<span>{task.text}</span>
			<CheckBox checked={isDone} onChange={() => setIsDone(task)} />
		</div>
	)
}

export default ItemTodoList
