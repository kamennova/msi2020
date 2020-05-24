export interface RadioItem<T> {
    label: string,
    value: T,
    children?: JSX.Element | (JSX.Element | undefined)[],
}
