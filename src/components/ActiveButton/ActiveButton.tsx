import { ButtonHTMLAttributes, FC } from 'react'
import classes from './ActiveButton.module.scss'

const ActiveButton: FC<
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>
> = ({ children, ...props }) => {
	return (
		<button className={classes.button} {...props}>
			{children}
		</button>
	)
}

export default ActiveButton
