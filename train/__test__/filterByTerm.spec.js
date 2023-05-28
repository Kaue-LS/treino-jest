const filterByTerm = require("../filter")

// Describe serve para conter bloco de testes
describe("Filter Function", () => {
    // test stuff
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        // Devera filtrar e remover os links q nao estao de acordo com o termo "link"
        const output = [{ id: 3, url: "https://www.link3.dev" }]
        const output2 = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
        ]

        // 1º
        expect(filterByTerm(input, "link")).toEqual(output);
        // 2º
        expect(filterByTerm(input, "LINK")).toEqual(output);

        expect(filterByTerm(input, " ")).toEqual(input);

    })
})