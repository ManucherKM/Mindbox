import classes from './TextWarning.module.scss'
import { FC, HTMLAttributes } from 'react'

const TextWarning: FC<Omit<HTMLAttributes<HTMLSpanElement>, 'className'>> = ({
	children,
	...props
}) => {
	return (
		<span className={classes.warning} {...props}>
			{children}
		</span>
	)
}

export default TextWarning
