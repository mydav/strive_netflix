let baseUrl = "https://strive-school-testing-apis.herokuapp.com/api/movies"
let credentials = "Basic " + btoa("user23:2ak9E5qqBKvV2wky")
let headers = {
    "Authorization": credentials,
    "Cintent-Type": "application/json"
}

get = async () => {
    var response = await fetch(baseUrl, {
        headers: headers
    })
    return await response.json();
}

getByCat = async (category) => {
    var response = await fetch(baseUrl + category, {
        headers: headers
    })
    return await response.json();
}

create = async (movies) => {
    var response = await fetch(baseUrl, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(movies)

    })
    return await response.json();
}

edit = async (id, movie) => {
    var response = await fetch(baseUrl + id, {
        headers: headers,
        method: "PUT",
        body: JSON.stringify(movie)

    })
    return await response.json();
}

deleteMovie = async (id) => {
    var response = await fetch(baseUrl + id, {
        headers: headers,
        method: "DELETE"
    })
    return await response.json();
}