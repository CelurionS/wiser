const fs = require("fs");
const path = require("path");
const mysql = require("mysql2");

// Koneksi ke database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wiser"
});

// Path absolut ke file JSON
const dataPath = path.join(__dirname, "../public/data/artikel.json");

try {
    // Membaca file JSON
    const rawData = fs.readFileSync(dataPath, "utf8");
    const data = JSON.parse(rawData);

    console.log("Data ditemukan. Mulai mengimpor...");

    data.forEach((article) => {
        const { id, title, author, date, content, image } = article;

        // Insert ke tabel articles
        db.query(
            "INSERT INTO articles (id, title, author, date, content, image) VALUES (?, ?, ?, ?, ?, ?)",
            [id, title, author, new Date(Date.parse(date)), content, image],
            (err) => {
                if (err) console.error(`Error saat memasukkan artikel dengan id ${id}:`, err.message);
            }
        );

        // Insert ke tabel references (jika ada)
        if (article.references && article.references.length > 0) {
            article.references.forEach((ref) => {
                db.query(
                    "INSERT INTO reference (article_id, url, description) VALUES (?, ?, ?)",
                    [id, ref.url, ref.description],
                    (err) => {
                        if (err) console.error(`Error saat memasukkan referensi untuk artikel id ${id}:`, err.message);
                    }
                );
            });
        }

        // Insert ke tabel comments (jika ada)
        if (article.comments && article.comments.length > 0) {
            article.comments.forEach((comment) => {
                db.query(
                    "INSERT INTO comments (article_id, user, date, content) VALUES (?, ?, ?, ?)",
                    [id, comment.user, new Date(Date.parse(comment.date)), comment.content],
                    (err) => {
                        if (err) console.error(`Error saat memasukkan komentar untuk artikel id ${id}:`, err.message);
                    }
                );
            });
        }
    });

    console.log("Semua data berhasil diimpor!");
} catch (err) {
    console.error("Error saat membaca file JSON:", err.message);
} finally {
    // Tutup koneksi database
    db.end((err) => {
        if (err) {
            console.error("Error saat menutup koneksi database:", err.message);
        } else {
            console.log("Koneksi database ditutup.");
        }
    });
}
