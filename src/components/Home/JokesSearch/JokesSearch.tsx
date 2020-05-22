import React, { useEffect, useState } from 'react';
import { Filter, FilterOptions, getOptions } from "../../../types/Filters";
import { Button } from "../../basic/buttons";
import { SpinnerIcon } from "../../basic/icons/Spinner";
import { RadioGroup } from "../../basic/inputs/Radio";
import { TextInput } from "../../basic/inputs/TextInput";
import { Tip } from "../../basic/Tip";
import { styles } from "./style";
import { CategoryList } from "./CategoryList";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const DefaultCategory = 'celebrity';

const maxDelayMs = 120;

export const JokesSearch = (props: { categories: string[], onLoadNext: (filter: FilterOptions) => Promise<void> }) => {
    const initCategory = props.categories.length > 0 ? props.categories[0] : DefaultCategory;

    const [isFetching, setIsFetching] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [activeFilter, setActiveFilter] = useState<Filter>(Filter.Random);
    const [category, setCategory] = useState<string>(initCategory);
    const [query, setQuery] = useState<string>('');
    const [showQueryTip, setShowQueryTip] = useState(false);

    const onSubmit = async () => {
        if (activeFilter === Filter.Search && query.length < 3) {
            setShowQueryTip(true);
        } else {
            if (showQueryTip && query.length >= 3) {
                setShowQueryTip(false);
            }

            setIsFetching(true);
        }
    };

    const showSpinnerIfNotLoaded = () => {
        if (isFetching) {
            setShowSpinner(true)
        }
    };

    useEffect(() => {
        if (isFetching) {
            const timer = setTimeout(showSpinnerIfNotLoaded, maxDelayMs);

            props.onLoadNext(getOptions(activeFilter, category, query)).then(() => {
                clearTimeout(timer);
                setShowSpinner(false);
                setIsFetching(false);
            });
        }
    }, [isFetching]);

    const updateQuery = (evt: { target: { value: string } }) => setQuery(evt.target.value);

    const items = props.categories.map(cat => ({ name: cat, isSelected: category === cat }));

    const filters = [
        {
            label: 'Random',
            value: Filter.Random,
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
                <TextInput name={'Search'} value={query} onChange={updateQuery} placeholder="Free text search..."/>,
                showQueryTip ? <Tip>Enter at least 3 characters</Tip> : undefined
            ],
        },
    ];

    return (
        <section css={styles.filtersWrap}>
            <RadioGroup name='filter-options' items={filters} onCheck={setActiveFilter} activeItem={activeFilter}/>
            <Button style={styles.submitBtn}
                    icon={showSpinner ? <SpinnerIcon/> : undefined}
                    onClick={onSubmit}
                    label='Get a joke'/>
        </section>
    );
};
