import initialState from "./states"

import { FILTER_BY_CATEGORY, UNSET_FILTER_BY_CATEGORY } from "./types"


const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_CATEGORY:
            const categoriesToAddFilter = state.categories
            categoriesToAddFilter.push(action.payload)
            return {
                ...state,
                categories: categoriesToAddFilter
            }
        case UNSET_FILTER_BY_CATEGORY:
            const categoriesToDeductFilter = state.categories
            const newCategoriesToFilterLess = categoriesToDeductFilter.filter(category => category !== action.payload)
            return {
                ...state,
                categories: newCategoriesToFilterLess
            }

        default:
            return state

    }

}



export default filterReducer