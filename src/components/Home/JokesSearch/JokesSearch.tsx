import React, { useState } from 'react';
import { Filter, FilterOptions } from "../../../types/Filters";

import { JokeFilters } from "./JokeFilters";

const DefaultCategory = 'celebrity';

export const JokesSearch = (props: { categories: string[], onLoadNext: (filter: FilterOptions) => void }) => {
    const initCategory = props.categories.length > 0 ? props.categories[0] : DefaultCategory;

    const [activeFilter, setActiveFilter] = useState<Filter>(Filter.Random);
    const [activeCategory, setActiveCategory] = useState<string>(initCategory);
    const [activeQuery, setActiveQuery] = useState<string>('');

    const onSubmit = async () => {
        if (activeFilter === Filter.Random) {
            props.onLoadNext({ type: Filter.Random });
        } else if (activeFilter === Filter.Categories) {
            props.onLoadNext({ type: Filter.Categories, category: activeCategory });
        } else {
            props.onLoadNext({ type: Filter.Search, query: activeQuery });
        }
    };

    return (
        <JokeFilters
            onSubmit={onSubmit}
            categories={props.categories}
            activeQuery={activeQuery}
            setQuery={setActiveQuery}
            activeCategory={activeCategory}
            onSetCategory={setActiveCategory}
            activeFilter={activeFilter}
            onCheckFilter={setActiveFilter}/>
    );
};
