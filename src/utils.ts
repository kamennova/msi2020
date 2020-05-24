import './polyfills';

export const msToHours = (ms: number) => Math.floor(ms / 1000 / 60 / 60);

export const replace = <T extends { id: string }>(arr: T[], item: T, newItem: T): T[] => {
    const index = arr.findIndex(elem => elem.id === item.id);

    if (item === undefined) {
        return arr;
    }

    const newArr = [...arr];
    newArr[index] = newItem;

    return newArr;
};
