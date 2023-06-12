import classes from './Input.module.scss'
import { FC, InputHTMLAttributes } from 'react'

const Input: FC<
	Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>
> = props => {
	return <input className={classes.input} {...props} />
}

export default Input
