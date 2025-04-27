interface IGroup {
    group: number
    name: string
}

type key = string | number | symbol

function group <T extends IGroup>(data: T[]): Record<string, T[]> {
    const groups: Record<string, T[]> = {}
    data.forEach((item) => {
        const groupsNumbers = Object.keys(groups)
        if (!groupsNumbers.includes(item.group.toString()) || groupsNumbers.length === 0) {
            groups[item.group] = [item]
        }
        if (groupsNumbers.includes(item.group.toString())) {
            groups[item.group] = [...groups[item.group], item]
        }
    })
    return groups
}

const exampleGroups: IGroup[] = [
    {group: 2, name: 'dd'},
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

const grouped = group<IGroup>(exampleGroups)