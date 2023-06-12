import classes from './ActiveButton.module.scss'
import { FC, ButtonHTMLAttributes } from 'react'

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
