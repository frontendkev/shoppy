
export const customSort = (a, b) => {

    const dateA = a.dateAdded
    const dateB = b.dateAdded

    if (dateB > dateB) return 1;
    else if (dateA < dateB) return -1;
    return 0;
}

export const checkInStorage = (file) => {

    const check = localStorage.getItem(file)
    if (check) {

        const parseItem = JSON.parse(check)

            return parseItem

    } else if (!check) {

        return false

    }
}

export const findItem = (id, items) => {
    const find = items.find(item => item.id === id)
    if (find){
    return items.map(item => item.id === id ? {...item, time:new Date().toString()} : item).sort(customSort)
    } else {
        return false
    }
}

export const saveInStorage = (name, items) => {

    const stringifyItems = JSON.stringify(items)

    return localStorage.setItem(name, stringifyItems)
    
}



