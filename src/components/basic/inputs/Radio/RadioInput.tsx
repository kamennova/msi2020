import React from 'react';
import { styles } from "./style";

/** @jsx jsx */
import { jsx } from '@emotion/core'

type InputProps = {
    label: string,
    name: string,
    id: string,
    isChecked: boolean,
    onCheck: () => void,
};

export const RadioInput = (props: InputProps) => (
    <label css={styles.label}>
        <span css={[styles.indicator, props.isChecked ? styles.indicatorChecked : undefined]}/>
        <input css={styles.input} type="radio" name={props.name} id={props.id} onChange={props.onCheck}/>{props.label}
    </label>
);
