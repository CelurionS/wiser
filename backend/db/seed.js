const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Koneksi ke database
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "wiser",
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err.message);
        process.exit(1);
    } else {
        console.log("Connected to database");
    }
});

// Baca file JSON
const filePath = path.join(__dirname, "../berita.json");
const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Fungsi untuk memasukkan data ke database
const seedData = async () => {
    try {
        // Loop untuk setiap berita
        for (const berita of jsonData) {
            // Insert berita ke tabel `articles`
            const { insertId } = await new Promise((resolve, reject) => {
                const query = `
                    INSERT INTO berita (id, title, author, date, mainPhoto, content) 
                    VALUES (?, ?, ?, ?, ?, ?)
                `;
                db.query(
                    query,
                    [berita.id, berita.title, berita.author, berita.date, berita.mainPhoto, berita.content],
                    (err, result) => {
                        if (err) return reject(err);
                        resolve(result);
                    }
                );
            });

            console.log(`Inserted article ID: ${insertId}`);

            // Insert referensi ke tabel `reference`
            for (const ref of berita.references || []) {
                await new Promise((resolve, reject) => {
                    const query = `
                        INSERT INTO berita_references (berita_id, url, description) 
                        VALUES (?, ?, ?)
                    `;
                    db.query(query, [berita.id, ref.url, ref.description], (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });
                console.log(`Inserted reference for berita ID: ${berita.id}`);
            }
        }

        console.log("Data berhasil dimigrasikan ke database.");
    } catch (error) {
        console.error("Error seeding data:", error.message);
    } finally {
        db.end();
    }
};

// Panggil fungsi seed
seedData();
