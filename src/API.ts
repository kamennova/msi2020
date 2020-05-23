import { Joke } from "./types/Joke";
import { msToHours } from "./utils";

export const ApiUrl = 'https://api.chucknorris.io/jokes/';

type ApiJoke = {
    categories: string[],
    id: string,
    updated_at: string,
    url: string,
    value: string,
};

export const fetchAPI = async (href: string) => await fetch(ApiUrl + href, { method: 'GET' })
    .then(res => res.json());

export const getCategories = async (): Promise<string[]> => await fetchAPI('categories');

export const getByFreeSearch = async (query: string): Promise<Joke[]> =>
    await fetchAPI(`search?query=${query}`)
        .then((res) => res.result.map((item: ApiJoke) => toJoke(item)));

export const getByCategory = async (category: string): Promise<Joke> =>
    await fetchAPI(`random?category=${category}`)
        .then(res => toJoke(res));

export const getRandom = async (): Promise<Joke> => await fetchAPI('random')
    .then(res => toJoke(res));

const toJoke = (joke: ApiJoke): Joke => ({
    category: joke.categories[0],
    id: joke.id,
    url: joke.url,
    isFavourite: false,
    content: joke.value,
    hoursSinceUpdate: msToHours(Date.now() - Date.parse(joke.updated_at)),
});
