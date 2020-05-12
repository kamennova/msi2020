import React, { useState } from 'react';
import { Filter, FilterOptions, getOptions } from "../../../types/Filters";
import { Button } from "../../basic/buttons";
import { SpinnerIcon } from "../../basic/icons/Spinner";
import { RadioGroup } from "../../basic/inputs/RadioGroup";
import { TextInput } from "../../basic/inputs/TextInput";
import { CategoryList } from "./CategoryList";

const DefaultCategory = 'celebrity';

export const JokesSearch = (props: { categories: string[], onLoadNext: (filter: FilterOptions) => void }) => {
        const initCategory = props.categories.length > 0 ? props.categories[0] : DefaultCategory;

        const [isLoaded, setIsLoaded] = useState(true);
        const [activeFilter, setActiveFilter] = useState<Filter>(Filter.Random);
        const [category, setCategory] = useState<string>(initCategory);
        const [query, setQuery] = useState<string>('');
        const [showQueryTip, setShowQueryTip] = useState(false);

        const onSubmit = async () => {
            if (activeFilter === Filter.Search && query.length < 3) {
                setShowQueryTip(true);
            } else {
                loadData();
            }
        };

        const loadData = async () => {
            setIsLoaded(false);
            await props.onLoadNext(getOptions(activeFilter, category, query));
            setIsLoaded(true);
        };

        const updateQuery = (evt: { target: { value: string } }) => {
            setQuery(evt.target.value);

            if (showQueryTip && query.length >= 3) {
                setShowQueryTip(false);
            }
        };
        const items = props.categories.map(cat => ({ name: cat, isSelected: category === cat }));

        const filters = [
            {
                label: 'Random',
                value: Filter.Random
            },
            {
                label: 'From categories',
                value: Filter.Categories,
                children: <CategoryList items={items} onSelect={setCategory}/>,
            },
            {
                label: 'Search',
                value: Filter.Search,
                children: [
                    <br/>,
                    <TextInput name={'Search'} value={query}
                               onChange={updateQuery} className="search-input"
                               placeholder="Free text search..."/>,
                    showQueryTip ? <QueryTip>Enter at least 3 characters</QueryTip> : undefined]

            }
        ];

        return (
            <section className="filter-options">
                <RadioGroup items={filters} onCheck={setActiveFilter} activeItem={activeFilter}/>
                <Button icon={!isLoaded ? <SpinnerIcon/> : undefined} onClick={onSubmit} label='Get a joke'/>
            </section>
        );
    }
;

const QueryTip = (props: { children: string }) => (
    <p style={{ fontSize: 14, color: '#ABABAB' }}>{props.children}</p>
);
