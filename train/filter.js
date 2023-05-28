function filterByTerm(inputArr, searchTerm) {
    // 1º
    // return inputArr.filter(function (arrayElement) {
    //     return arrayElement.url.match(searchTerm);
    // });

    if (searchTerm.trim().length === 0) return inputArr

    //1º 2º
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    })
}

module.exports = filterByTerm