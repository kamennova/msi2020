export enum Filter {
    Random = 'Random',
    Categories = 'Categories',
    Search = 'Search'
}

export type FilterOptions = { type: Filter.Random }
    | { type: Filter.Categories, category: string }
    | { type: Filter.Search, query: string };

export const getOptions = (type: Filter, category: string, query: string): FilterOptions => {
    switch (type) {
        case Filter.Random:
            return { type };
        case Filter.Categories:
            return { type, category };
        case Filter.Search:
            return { type, query };
    }
};
