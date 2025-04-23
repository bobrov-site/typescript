const toStringValue = <T>(value: T): string| undefined => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return value.toString();
    if (typeof value === 'boolean') return value.toString();
    if (typeof value === 'object') return JSON.stringify(value);
    if (typeof value === 'symbol') return value.toString();
    if (typeof value === 'function') return value.toString();
    if (typeof value === 'undefined') return undefined;
    if (Array.isArray(value)) return value.toString();
}

toStringValue(1)
toStringValue('test')
toStringValue(true)
toStringValue({a: 1})
toStringValue([1, 2, 3])
toStringValue(() => {})
toStringValue(undefined)