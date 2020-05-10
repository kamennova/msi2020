export enum Filter {
    Random = 'Random',
    Categories = 'Categories',
    Search = 'Search'
}

export type FilterOptions = { type: Filter.Random }
    | { type: Filter.Categories, category: string }
    | { type: Filter.Search, query: string };
