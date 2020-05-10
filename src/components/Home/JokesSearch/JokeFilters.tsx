import React from 'react';
import { Filter } from "../../../types/Filters";
import { Button } from "../../basic/buttons";
import { RadioGroup } from "../../basic/inputs/RadioGroup";
import { TextInput } from "../../basic/inputs/TextInput";
import '../Jokes.css';
import { CategoryList } from "./CategoryList";

type FiltersProps = {
    onSubmit: () => void,
    categories: string[],
    activeFilter: Filter,
    activeCategory?: string,
    activeQuery: string,
    onCheckFilter: (_: Filter) => void,
    setQuery: (_: string) => void,
    onSetCategory: (cat: string) => void,
};

export const JokeFilters = (props: FiltersProps) => {
    const items = props.categories.map(cat => ({ name: cat, isSelected: props.activeCategory === cat }));

    const filters = [
        {
            label: 'Random',
            value: Filter.Random
        },
        {
            label: 'From categories',
            value: Filter.Categories,
            children: <CategoryList items={items} onSelect={props.onSetCategory}/>,
        },
        {
            label: 'Search',
            value: Filter.Search,
            children: [<br/>,
                <TextInput name={'Search'} value={props.activeQuery}
                           onChange={(evt) => props.setQuery(evt.target.value)} className="search-input"
                           placeholder="Free text search..."/>]

        }
    ];

    return (
        <section className="filter-options">
            <RadioGroup items={filters} onCheck={props.onCheckFilter} activeItem={props.activeFilter}/>
            <Button onClick={props.onSubmit} label='Get a joke'/>
        </section>
    );
};
