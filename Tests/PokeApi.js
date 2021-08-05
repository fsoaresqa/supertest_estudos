const request = require("supertest");
const assert = require("chai").assert;
const expect = require("chai").expect;

// https://pokeapi.co/docs/v2

describe("GET Pokemons", () => {
  it("Listar todos os Pokemons", async () => {
    const response = await request("https://pokeapi.co")
        .get("/api/v2/pokemon");

    assert.equal(response.statusCode, 200, "Status code");
    assert.notEqual(response.body, null);
  });

  it("Validar Id, Nome, Habilidade e tipo", async () => {
    const response = await request("https://pokeapi.co")
    .get("/api/v2/pokemon/778"
    );

    expect(response.body.id).to.equal(778);
    expect(response.body.name).to.contain("mimikyu");
    assert.equal(response.body.abilities[0].ability.name,"disguise");
  });

});
