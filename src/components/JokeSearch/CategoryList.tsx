import React from 'react';
import { List } from "../basic/List";
import { Category } from "../Category";
import { styles } from "./style";

/** @jsx jsx */
import { jsx } from '@emotion/core'

type Category = {
    name: string,
    isSelected: boolean,
};

export const CategoryList = (props: { items: Category[], onSelect: (cat: string) => void, }) => (
    <List style={styles.list}>
        {props.items.map((category) => <CategoryOption {...category} onSelect={props.onSelect}/>)}
    </List>
);

const CategoryOption = (props: { name: string, isSelected: boolean, onSelect: (name: string) => void }) => (
    <li css={styles.categoryWrap} onClick={() => props.onSelect(props.name)}>
        <Category style={props.isSelected ? styles.selected : undefined} name={props.name}/>
    </li>
);
