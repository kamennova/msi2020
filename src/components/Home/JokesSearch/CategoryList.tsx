import React from 'react';

type Category = {
    name: string,
    isSelected: boolean,
};

export const CategoryList = (props: { items: Category[], onSelect: (cat: string) => void, }) => (
    <ul className='list category-list'>
        {props.items.map((cat) => (
            <li className={'category category-option ' + (cat.isSelected ? 'selected' : '')}
                onClick={() => props.onSelect(cat.name)}>{cat.name}</li>))}
    </ul>
);
