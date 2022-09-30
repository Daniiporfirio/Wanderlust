const conn = require("../infra/db-connection")("infra/cities.db")
const countriesDAO = require("../model/countriesDAO")(conn);
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

exports.getCountries = (req, res) => {
    countriesDAO.findAll((err, rows) => {
        // Verificando Erros
        if (err) return res.json({ message: "Houve um erro ao consultar os dados", err })

        // Renderizando a página
        res.render("index", { countries: rows, role: "index" });
    });
}

exports.editCountries = (req, res) => {
    countriesDAO.findAll((err, rows) => {
        // Verificando Erros
        if (err) return res.json({ message: "Houve um erro ao consultar os dados", err })

        // Renderizando a página
        res.render("index", { countries: rows, role: "edit-countries" });
    });
}

exports.getAddCountryForm = (req, res) => {
    // Renderizando a página
    res.render("add-country");
};

exports.saveCountry = (req, res) => {
    const formData = new formidable.IncomingForm();

    // Gerando o formulário
    formData.parse(req, (err, fields, files) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Algo errado aconteceu.", err });

        // Pegando o endereço onde serão guardados as imagens
        const imagesPath = path.join(__dirname, "../public/images", files.image.newFilename);

        // Pegando informações do formulário
        const country = { ...fields, image: files.image.newFilename };

        // Salvando informações
        countriesDAO.saveCountry(country, (err) => {
            // Verificando Erros
            if (err) return res.status(500).json({ errorMessage: "Erro ao salvar os dados", err });

            // Salva a imagem no caminho definido, apenas após obter sucesso ao salvar no banco
            fs.renameSync(files.image.filepath, imagesPath);

            // Renderiza a Página
            return res.redirect("/");
        });
    });
}

exports.getEditCountryForm = (req, res) => {
    const ID = req.params.ID;

    // Coletando informações sobre o país de acordo com o IDCountry
    countriesDAO.findByID(ID, (err, row) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Houve um erro ao consultar os dados", err });
        if (!row) return res.status(404).json({ errorMessage: "País não encontrado", err });

        // Renderizando a página
        res.render("edit-country", { country: row });
    });
};

exports.updateCountry = (req, res) => {
    const ID = req.params.ID;

    // Coletando informações sobre o país de acordo com o IDCountry
    countriesDAO.findByID(ID, (err, row) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Houve um erro ao consultar os dados.", err });
        if (!row) return res.status(404).json({ errorMessage: "País não encontrado", err });

        const country = { ...row, ...req.body };

        // Atualizando no Banco de Dados
        countriesDAO.updateCountry(ID, country, (err2) => {
            // Verificando Erros
            if (err2) return res.status(500).json({ errorMessage: "Algo errado aconteceu.", err: err2 });

            // Renderizando a página
            return res.redirect("/");
        });
    });
};

exports.deleteCountry = (req, res) => {
    const ID = req.params.ID;

    countriesDAO.deleteCountry(ID, (err) => {
        // Verificando Erros
        if (err) return res.status(500).json({ errorMessage: "Algo errado aconteceu.", err });

        // Renderizando a página
        return res.redirect("/");
    });
};
