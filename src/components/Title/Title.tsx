import classes from './Title.module.scss'
import { FC, HTMLAttributes } from 'react'

const Title: FC<Omit<HTMLAttributes<HTMLSpanElement>, 'className'>> = ({
	children,
	...props
}) => {
	return (
		<span className={classes.title} {...props}>
			{children}
		</span>
	)
}

export default Title
