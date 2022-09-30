class countriesDAO {
    constructor(conn) {
        this.db = conn;
    }

    findAll(callback) {
        const sql = `SELECT * FROM countries ORDER BY name ASC`

        this.db.all(sql, callback);
    }

    findByID(ID, callback) {
        const sql = `SELECT * FROM countries WHERE IDCountry = ? ORDER BY name ASC`

        this.db.get(sql, ID, callback);
    }

    saveCountry(country, callback) {
        const { name, image } = country;
        const sql = `INSERT INTO countries (name,image) VALUES (?, ?)`

        this.db.run(sql, [name, image], callback);
    }

    updateCountry(ID, country, callback) {
        const { name, image } = country;
        const sql = `UPDATE countries SET name = ?, image = ? WHERE IDCountry = ?`;

        this.db.run(sql, [name, image, ID], callback);
    }

    deleteCountry(ID, callback) {
        const sql = `DELETE FROM countries WHERE IDCountry = ?`

        this.db.run(sql, ID, callback);
    }
}

module.exports = (conn) => {
    return new countriesDAO(conn);
};