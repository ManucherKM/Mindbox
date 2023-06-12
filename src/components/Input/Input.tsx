import { FC, InputHTMLAttributes } from 'react'
import classes from './Input.module.scss'

const Input: FC<
	Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>
> = props => {
	return <input className={classes.input} data-testid="Input" {...props} />
}

export default Input
