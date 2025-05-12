declare module 'sort-by' {
    function sortBy<T>(...properties: string[]): (a: T, b: T) => number;
    export default sortBy;
} 