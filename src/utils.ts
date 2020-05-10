export const msToHours = (ms: number) => Math.floor(ms / 1000 / 60 / 60);

export const replace = <T extends {}>(arr: T[], item: T, newItem: T): T[] => {
    const index = arr.indexOf(item);

    if (item === undefined) {
        return arr;
    }

    const newArr = [...arr];
    newArr[index] = newItem;

    return newArr;
};
