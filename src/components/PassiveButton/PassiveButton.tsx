import classes from './PassiveButton.module.scss'
import { FC, HTMLAttributes } from 'react'

const PassiveButton: FC<
	Omit<HTMLAttributes<HTMLButtonElement>, 'className'>
> = ({ children, ...props }) => {
	return (
		<button className={classes.button} {...props}>
			{children}
		</button>
	)
}

export default PassiveButton
