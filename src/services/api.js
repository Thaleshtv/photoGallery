const baseURL = 'https://api.pexels.com/v1/'

export async function getInicialPhotos({ index, type }) {
    const response = await fetch(`${baseURL}${type}/?page=${index}&per_page=18`, {
        headers: {
            Authorization: "563492ad6f91700001000001d90fd8687e0b4081b11bd2d3bf59a041"
          },
    })

    return await response.json()
}

export async function getSearchPhotos({ searchResult, index, type }) {
    const response = await fetch(`${baseURL}${type}/?page=${index}&per_page=18&query=${searchResult}`,{
        headers: {
            Authorization: "563492ad6f91700001000001d90fd8687e0b4081b11bd2d3bf59a041"
          },
    })

    return await response.json()
}