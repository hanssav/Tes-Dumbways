const http = require("http")
const express = require("express")
const path = require("path")
// const session = require("express-session");

const app = express()
const hbs = require("hbs")

const heroRoute = require("./routes/hero")


const dbConnection = require("./connection/db")

// app.use(express.static("express"))

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.urlencoded({ extended: false }))

app.set("views", path.join(__dirname, "views"))

app.set("view engine", "hbs")


// register view partials
hbs.registerPartials(path.join(__dirname, "views/partials"))

app.get("/", function (req, res) {
    // // res.send("Hallo")
    // const query = "SELECT heroes_tb.id, heroes_tb.name, heroes_tb.photo, heroes_tb.id, type_id.id, type_id.name AS idName FROM heroes_tb INNER JOIN type_id ON heroes_tb.type_id = type_id.id ORDER BY heroes_tb.id DESC";

    const query = "SELECT * FROM heroes_tb ORDER BY id DESC;"
    dbConnection.getConnection((err, conn) => {
        if (err)
            throw err;
        
        // console.log(dbConnection)
        conn.query(query, (err, results) => {
            // console.log(results)
            if (err)
                throw err;
            
            let heroes = [];

            for (let result of results) {
                heroes.push({
                    ...result,
                    image: "http://localhost:5000/uploads/" + result.photo
                });
            }
            
            res.render("index", {title: "Heroes", isLogin: true, heroes})
        })
        conn.release;
    })

})

app.use("/", heroRoute);

const server = http.createServer(app)
const port = 5000
server.listen(port, () => {
    console.log("Server running on port ", port)
})