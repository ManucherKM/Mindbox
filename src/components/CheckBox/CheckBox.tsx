import { FC, InputHTMLAttributes } from 'react'
import classes from './CheckBox.module.scss'

const CheckBox: FC<
	Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'>
> = props => {
	return (
		<input
			className={classes.checkbox}
			type="checkbox"
			data-testid="CheckBox"
			{...props}
		/>
	)
}

export default CheckBox
