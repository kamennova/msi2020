import React, { useEffect, useState } from 'react';
import { Filter, FilterOptions, getOptions } from "../../types";
import { Button } from "../basic/buttons";
import { SpinnerIcon } from "../basic/icons";
import { RadioGroup } from "../basic/inputs/Radio";
import { TextInput } from "../basic/inputs/TextInput";
import { Tip } from "../basic/Tip";
import { styles } from "./style";
import { CategoryList } from "./CategoryList";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const MaxDelayMs = 120;

type FiltersProps = {
    categories: string[],
    onLoadNext: (filter: FilterOptions) => Promise<void>,
    query: string,
    category: string,
    activeFilter: Filter,
    setQuery: (q: string) => void,
    setCategory: (c: string) => void,
    setActiveFilter: (f: Filter) => void,
}

export const JokeSearch = (props: FiltersProps) => {
    const [isFetching, setIsFetching] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showQueryTip, setShowQueryTip] = useState(false);

    const onSubmit = async () => {
        if (props.activeFilter === Filter.Search && props.query.length < 3) {
            setShowQueryTip(true);
        } else {
            if (showQueryTip && props.query.length >= 3) {
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
            // only show spinner when load time exceeds max delay
            const timer = setTimeout(showSpinnerIfNotLoaded, MaxDelayMs);

            props.onLoadNext(getOptions(props.activeFilter, props.category, props.query)).then(() => {
                clearTimeout(timer);
                setShowSpinner(false);
                setIsFetching(false);
            });
        }
    }, [isFetching]);

    const updateQuery = (evt: { target: { value: string } }) => props.setQuery(evt.target.value);

    const items = props.categories.map(cat => ({ name: cat, isSelected: props.category === cat }));

    const filters = [
        {
            label: 'Random',
            value: Filter.Random,
        },
        {
            label: 'From categories',
            value: Filter.Categories,
            children: <CategoryList items={items} onSelect={props.setCategory}/>,
        },
        {
            label: 'Search',
            value: Filter.Search,
            children: [
                <br/>,
                <TextInput name={'Search'} value={props.query} onChange={updateQuery}
                           placeholder="Free text search..." autoFocus={true}/>,
                showQueryTip ? <Tip>Enter at least 3 characters</Tip> : undefined
            ],
        },
    ];

    return (
        <section css={styles.filtersWrap}>
            <RadioGroup name='filter-options' items={filters} onCheck={props.setActiveFilter}
                        activeItem={props.activeFilter}/>
            <Button style={styles.submitBtn}
                    icon={showSpinner ? <SpinnerIcon/> : undefined}
                    onClick={onSubmit}
                    label='Get a joke'/>
        </section>
    );
};
