import classes from './CheckBox.module.scss'
import { FC, InputHTMLAttributes } from 'react'

const CheckBox: FC<
	Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'>
> = props => {
	return <input className={classes.checkbox} type='checkbox' {...props} />
}

export default CheckBox
