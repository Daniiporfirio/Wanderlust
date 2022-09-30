const citiesController = require("./controller/cities.controller");
const countriesController = require("./controller/countries.controller");

module.exports = (app) => {
    // Página Principal
    app.get("/", (req, res) => countriesController.getCountries(req, res));

    // Página para editar os paises
    app.get("/edit-countries", (req, res) => countriesController.editCountries(req, res));

    // Página para adicionar um novo país
    app.get("/add-country", (req, res) => countriesController.getAddCountryForm(req, res));

    // Salvar no banco de dados o novo país
    app.post("/save-country", (req, res) => countriesController.saveCountry(req, res));

    // Página para editar um país
    app.get("/edit-country/:ID", (req, res) => countriesController.getEditCountryForm(req, res));

    // Salvar no banco de dados as edições do país
    app.post("/update-country/:ID", (req, res) => countriesController.updateCountry(req, res));

    // Página para deletar um país
    app.get("/delete-country/:ID", (req, res) => countriesController.deleteCountry(req, res));




    // Página com todas as Cidades
    app.get("/cities", (req, res) => citiesController.getCities(req, res));

    // Página para editar as Cidades
    app.get("/edit-cities", (req, res) => citiesController.editCities(req, res));

    // Página com todas as cidades do páis específico
    app.get("/country/:ID/cities", (req, res) => citiesController.getCityByIDCountry(req, res));

    // Página da cidade com o IDCity específico
    app.get("/cities/:ID", (req, res) => citiesController.getCityByID(req, res));

    // Página para adicionar uma nova cidade
    app.get("/add-city", (req, res) => citiesController.getAddCityForm(req, res));

    // Salvar no banco de dados a nova cidade
    app.post("/save-city", (req, res) => citiesController.saveCity(req, res));

    // Página para editar uma cidade
    app.get("/edit-city/:ID", (req, res) => citiesController.getEditCityForm(req, res));

    // Salvar no banco de dados as edições da cidade
    app.post("/update-city/:ID", (req, res) => citiesController.updateCity(req, res));

    // Página para deletar uma cidade
    app.get("/delete-city/:ID", (req, res) => citiesController.deleteCity(req, res));
};