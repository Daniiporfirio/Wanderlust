const conn = require("../infra/db-connection")("infra/cities.db");
const citiesDAO = require("../model/citiesDAO")(conn);
const countriesDAO = require("../model/countriesDAO")(conn);
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

exports.getCities = (req, res) => {
    citiesDAO.findAll((err, rows) => {
        // Verificando Erros
        if (err) return res.json({ message: "Houve um erro ao consultar os dados", err });

        // Renderizando a página
        res.render("index", { cities: rows, role: "cities" });
    });
};

exports.editCities = (req, res) => {
    citiesDAO.findAll((err, rows) => {
        // Verificando Erros
        if (err) return res.json({ message: "Houve um erro ao consultar os dados", err });

        // Renderizando a página
        res.render("index", { cities: rows, role: "edit-cities" });
    });
};

exports.getCityByID = (req, res) => {
    const ID = req.params.ID;
    citiesDAO.findByID(ID, (err, row) => {
        // Verificando Erros
        if (err) return res.json({ message: "Houve um erro ao consultar os dados", err });

        // Renderizando a página
        res.render("index", { city: row, role: "city" });
    });
};

exports.getCityByIDCountry = (req, res) => {
    const IDCountry = req.params.ID;
    citiesDAO.findByIDCountry(IDCountry, (err, rows) => {
        // Verificando Erros
        if (err) return res.render("not-found", { errorMessage: "Houve um erro ao consultar os dados", err });
        if (!rows.length) return res.render("not-found", { errorMessage: "Cidades não encontradas" });

        // Renderizando a página
        res.render("index", { cities: rows, role: "cities" });
    });
};

exports.getAddCityForm = (req, res) => {
    countriesDAO.findAll((err, rows) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Erro ao consultar os dados.", err });

        // Renderizando a página
        res.render("add-city", { countries: rows });
    });
};

exports.saveCity = (req, res) => {
    const formData = new formidable.IncomingForm();

    formData.parse(req, (err, fields, files) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Algo errado aconteceu.", err });

        // Caminho onde será guardado as imagens
        const imagesPath = path.join(__dirname, "../public/images", files.image.newFilename);

        // Pegando as informações do formulário
        const city = { ...fields, image: files.image.newFilename };

        // Salvando a cidade
        citiesDAO.saveCity(city, (err) => {
            // Verificando Erros
            if (err) return res.status(500).json({ errorMessage: "Erro ao salvar os dados.", err });

            // Salva a imagem no caminho definido, apenas após obter suceso ao salvar no banco
            fs.renameSync(files.image.filepath, imagesPath);

            // Renderizando a página
            return res.redirect("/cities");
        });
    });
};

exports.getEditCityForm = (req, res) => {
    const ID = req.params.ID;

    // Coletando informações sobre a cidade de acordo com o IDCity
    citiesDAO.findByID(ID, (err, row) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Houve um erro ao consultar os dados", err });

        if (!row) return res.status(404).json({ errorMessage: "Cidade não encontrada.", err });

        // Pegando as informações dos países (para colocar como caixa de escolha)
        countriesDAO.findAll((err, rows) => {
            // Verificando Erros
            if (err) return res.status(500).json({ errorMessage: "Erro ao consultar os dados", err });

            // Renderizando a página
            res.render("edit-city", { city: row, countries: rows });
        });
    });
};

exports.updateCity = (req, res) => {
    const ID = req.params.ID;

    // Coletando informações sobre a cidade de acordo com o IDCity
    citiesDAO.findByID(ID, (err, row) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Houve um erro ao consultar os dados.", er });
        if (!row) return res.status(404).json({ errorMessage: "Cidade não encontrada.", err });

        // Informações coletadas do formulário
        const city = { ...row, ...req.body };

        // Atualizando no Banco de Dados
        citiesDAO.updateCity(ID, city, (err2) => {
            // Verificando Erros
            if (err2) return res.status(500).json({ errorMessage: "Algo errado aconteceu.", err: err2 });

            // Renderizando a página
            return res.redirect("/cities");
        });
    });
};

exports.deleteCity = (req, res) => {
    const ID = req.params.ID;

    citiesDAO.deleteCity(ID, (err) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Algo errado aconteceu.", err });

        // Renderizando a página
        return res.redirect("/cities");
    });
};