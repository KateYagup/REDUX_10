// import { createSelector } from 'reselect';

export const optionsListSelector = state => {
    return state.options.optionsList;
}

export const selectedIdstSelector = state => {
    return state.options.selected;
}

// export const selectedOptionsSelector = createSelector(
//     [optionsListSelector, selectedIdstSelector],
//     (allOptions, selectedIds) => {
//         return allOptions.filter(option => selectedIds.includes(option.id));
//     }
// )

export const selectedOptionsSelector = state => {
    const allOptions = optionsListSelector(state);
    const selectedIds = selectedIdstSelector(state);
    return allOptions.filter(option => selectedIds.includes(option.id));
}

export const availableOptionsSelector = state => {
    const allOptions = optionsListSelector(state);
    const selectedIds = selectedIdstSelector(state);
    return allOptions.filter(option => !selectedIds.includes(option.id));
}