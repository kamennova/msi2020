import React from "react";
import { RadioInput } from "./RadioInput";

interface RadioGroupProps<T> {
    items: Array<RadioItem<T>>,
    onCheck: (_: T) => void,
    activeItem: T,
}

interface RadioItem<T> {
    label: string,
    value: T,
    children?: JSX.Element | JSX.Element[]
}

export const RadioGroup = <T extends {}>(props: RadioGroupProps<T>) => (
    <fieldset>
        {props.items.map((item) => (
            <RadioOption label={item.label} value={item.value}
                         onCheck={props.onCheck}
                         isChecked={item.value === props.activeItem}>{item.children}</RadioOption>))}
    </fieldset>
);


interface OptionProps<T> extends RadioItem<T> {
    isChecked: boolean,
    onCheck: (_: T) => void,
    children?: JSX.Element | JSX.Element[]
}

const RadioOption = <T extends {}>(props: OptionProps<T>) => (
    <div className={'option ' + props.value}>
        <RadioInput label={props.label}
                    name='filter-option'
                    id={'filter-option_' + props.value}
                    isChecked={props.isChecked} onCheck={() => props.onCheck(props.value)}/>
        {props.isChecked ? props.children : undefined}
    </div>
);
