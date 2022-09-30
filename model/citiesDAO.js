class CitiesDAO {
    constructor(conn) {
        this.db = conn;
    }

    findAll(callback) {
        const sql = `SELECT * FROM cities ORDER BY name`

        this.db.all(sql, callback);
    }

    findByID(ID, callback) {
        const sql = `SELECT * FROM cities WHERE IDCity = ?`
        this.db.get(sql, ID, callback);
    }

    findByIDCountry(IDCountry, callback) {
        const sql = `SELECT * FROM cities WHERE IDCountry = ? ORDER BY name`

        this.db.all(sql, IDCountry, callback);
    }

    saveCity(city, callback) {
        const { IDCountry, name, image } = city;
        const sql = `INSERT INTO cities (IDCountry,name,image) VALUES (?, ?, ?)`

        this.db.run(sql, [IDCountry, name, image], callback);
    }

    updateCity(ID, city, callback) {
        const { IDCountry, name, image } = city;
        const sql = `UPDATE cities SET IDCountry = ?, name = ?, image = ? WHERE IDCity = ?`;

        this.db.run(sql, [IDCountry, name, image, ID], callback);
    }

    deleteCity(ID, callback) {
        const sql = `DELETE FROM cities WHERE IDCity = ?`;

        this.db.run(sql, ID, callback);
    }
}

module.exports = (conn) => {
    return new CitiesDAO(conn);
};