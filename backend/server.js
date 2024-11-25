const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "wiser",
    multipleStatements: true // Mengaktifkan multiple queries
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err.message);
    } else {
        console.log("Connected to database");
    }
});

// Routes
app.get("/", (req, res) => {
    res.send("Server sedang berjalan!");
});

// Route untuk mendapatkan semua artikel
app.get("/api/articles", (req, res) => {
    const query = "SELECT * FROM articles";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error executing query:", err.message);
            res.status(500).json({ error: "Gagal mengambil data artikel" });
        } else {
            console.log("Query results:", results); // Log hasil query
            res.status(200).json(results);
        }
    });
});

// Route untuk mendapatkan artikel berdasarkan ID
app.get("/api/articles/:id", (req, res) => {
    const { id } = req.params;
    console.log("Received ID:", id); // Debug parameter ID
    const query = `
        SELECT * FROM articles WHERE id = ?;
        SELECT * FROM reference WHERE article_id = ?;
        SELECT * FROM comments WHERE article_id = ?;
    `;
    db.query(query, [id, id, id], (err, results) => {
        if (err) {
            console.error("Error executing query:", err.message);
            res.status(500).json({ error: err.message });
        } else {
            console.log("Query results:", results);
            res.status(200).json({
                article: results[0][0] || null,
                references: results[1] || [],
                comments: results[2] || []
            });
        }
    });
});

//Route untuk memasukan komentar
app.post("/api/articles/:id/comments", (req, res) => {
    const { id } = req.params; // ID artikel
    const { user, content } = req.body; // Data dari frontend
  
    // Validasi input
    if (!user || !content) {
      return res.status(400).json({ error: "Nama dan komentar harus diisi" });
    }
  
    const query = "INSERT INTO comments (article_id, user, content, date) VALUES (?, ?, ?, ?)";
    const values = [id, user, content, new Date()];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error("Error inserting comment:", err);
        return res.status(500).json({ error: "Gagal menyimpan komentar" });
      }
      res.status(201).json({ message: "Komentar berhasil disimpan" });
    });
  });

// Route untuk mendapatkan semua berita
app.get("/api/berita", (req, res) => {
    const query = "SELECT * FROM berita"; // Sesuaikan nama tabel Anda
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error executing query:", err.message);
            res.status(500).json({ error: "Gagal mengambil data berita" });
        } else {
            res.status(200).json(results);
        }
    });
});

// Route untuk mendapatkan berita berdasarkan ID
app.get("/api/berita/:id", (req, res) => {
    const { id } = req.params;

    const query = `
        SELECT * FROM berita WHERE id = ?;
        SELECT * FROM berita_references WHERE berita_id = ?;
    `;

    db.query(query, [id, id], (err, results) => {
        if (err) {
            console.error("Error executing query:", err.message);
            return res.status(500).json({ error: "Gagal mengambil data berita" });
        }

        console.log("Query results:", results); // Debug hasil query

        if (!results[0].length) {
            return res.status(404).json({ error: "Berita tidak ditemukan" });
        }

        res.status(200).json({
            berita: results[0][0], // Detail berita
            references: results[1] || [] // Referensi berita
        });
    });
});

// Route untuk menambahkan berita baru
app.post("/api/berita", (req, res) => {
    const { title, author, date, mainPhoto, content } = req.body;

    // Validasi input
    if (!title || !author || !date || !mainPhoto || !content) {
        return res.status(400).json({ error: "Semua field harus diisi" });
    }

    const query = "INSERT INTO berita (title, author, date, mainPhoto, content) VALUES (?, ?, ?, ?, ?)";
    const values = [title, author, date, mainPhoto, content];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error("Error inserting article:", err.message);
            res.status(500).json({ error: "Gagal menyimpan berita" });
        } else {
            res.status(201).json({ message: "Berita berhasil disimpan", id: result.insertId });
        }
    });
});

// Route untuk menambahkan referensi berita
app.post("/api/berita/:id/references", (req, res) => {
    const { id } = req.params; // ID berita
    const { url, description } = req.body;

    // Validasi input
    if (!url || !description) {
        return res.status(400).json({ error: "URL dan deskripsi harus diisi" });
    }

    const query = "INSERT INTO berita_references (berita_id, url, description) VALUES (?, ?, ?)";
    const values = [id, url, description];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error("Error inserting reference:", err.message);
            res.status(500).json({ error: "Gagal menyimpan referensi" });
        } else {
            res.status(201).json({ message: "Referensi berhasil disimpan" });
        }
    });
});

  

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Global error handler:", err.message);
    res.status(500).json({ error: "Something went wrong" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
