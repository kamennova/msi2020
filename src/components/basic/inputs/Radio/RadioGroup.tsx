import React from "react";
import { Fieldset } from "../../Fieldset";
import { RadioInput } from "./RadioInput";
import { RadioItem } from "./RadioItem";
import { styles } from "./style";

/** @jsx jsx */
import { jsx } from '@emotion/core'

interface RadioGroupProps<T> {
    items: Array<RadioItem<T>>,
    onCheck: (_: T) => void,
    activeItem: T,
    name: string,
}

export const RadioGroup = <T extends {}>(props: RadioGroupProps<T>) => (
    <Fieldset>
        {props.items.map((item) => (
            <RadioOption label={item.label} value={item.value}
                         onCheck={props.onCheck}
                         name={props.name}
                         isChecked={item.value === props.activeItem}>{item.children}</RadioOption>))}
    </Fieldset>
);


interface OptionProps<T> extends RadioItem<T> {
    isChecked: boolean,
    onCheck: (_: T) => void,
    name: string,
}

const RadioOption = <T extends {}>(props: OptionProps<T>) => (
    <div css={styles.optionWrap}>
        <RadioInput label={props.label}
                    name={props.name}
                    id={props.name + '_' + props.value}
                    isChecked={props.isChecked}
                    onCheck={() => props.onCheck(props.value)}/>
        {props.isChecked ? props.children : undefined}
    </div>
);
