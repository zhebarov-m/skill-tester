import styles from './Input.module.scss'
import {ChangeEvent, InputHTMLAttributes, memo} from "react";
import {customClasses} from "../../lib/customClasses/customClasses.ts";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={customClasses(styles.Input, {}, [className!])}>
            <input
                type="text"
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
