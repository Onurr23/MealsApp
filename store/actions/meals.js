
export function toggleFavorite(id){

    return({type : 'FAVORITED',payload : id})

}

export function setFilters(filtersSettings){

    return({type : 'FILTERED',payload : filtersSettings})

}

export default {toggleFavorite,setFilters};