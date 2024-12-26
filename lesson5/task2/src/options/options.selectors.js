export const optionsListSelector = state => {
    return state.options.optionsList;
}

export const selectedOptionsSlector = state => {
    const allOptionsList = state.options.optionsList;
    const selectedIds = state.options.selected;

    return allOptionsList.filter(option => selectedIds.includes(options.id));
}

export const availabeOptionsSlector = state => {
    const allOptionsList = state.options.optionsList;
    const selectedIds = state.options.selected;

    return allOptionsList.filter(option => !selectedIds.includes(options.id));
}