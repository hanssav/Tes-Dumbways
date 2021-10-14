const router = require("express").Router();

const dbConnection = require("../connection/db");
const uploadFile = require("../middlewares/uploadFile");
const pathFile = "http://localhost:5000/uploads/";

// render get add
router.get("/add-hero", function (req, res) {
    res.render("heroes/add-hero", {
        title: "Add Hero",
        isLogin: true,
    })
})


// render to add hero
router.post("/", uploadFile("image"), function (req, res) {
    let { name, typeId } = req.body;
    let image = req.file.filename;

    const query = "INSERT INTO heroes_tb (name, type_id, photo) VALUES (?,?, ?)";

    dbConnection.getConnection((err, conn) => {
        if (err) throw err;

        conn.query(query, [name, typeId, image], (err, result) => {
            if (err) throw err;

                res.redirect("/");
            
        })
    })
})
// add type type
router.get("/add-type", function (req, res) {
  res.render("heroes/add-type", {
      title: "Add type",
      isLogin: true,
  })
})

// render to add type
router.post("/add-type", function (req, res) {
  let { name } = req.body;

  const query = "INSERT INTO type_id (name) VALUES (?)";

  dbConnection.getConnection((err, conn) => {
    if (err) throw err;
    console.log(conn)

      conn.query(query, [name], (err, result) => {
        if (err) throw err;
        
        console.log(result)

              res.redirect("/");
          
      })
  })
})

// render delete
router.get("/delete/:id", function (req, res) {
    const { id } = req.params;
  
    const query = "DELETE FROM heroes_tb WHERE id = ?";
  
    dbConnection.getConnection((err, conn) => {
      if (err) throw err;
  
      conn.query(query, [id], (err, results) => {
          if (err) throw err;
              
        res.redirect("/");
      });
  
      conn.release();
    });
});
  
// render get edit hero and type id
router.get("/edit/:id", function (req, res) {
    const { id } = req.params;

    const query = "SELECT * FROM heroes_tb WHERE id = ?";

  dbConnection.getConnection((err, conn) => {
    if (err) {
      throw err;
    }

    conn.query(query, [id], (err, results) => {
        if (err) throw err;
        
        // console.log(results[0].photo)

      const hero = {
        ...results[0],
        photo: pathFile + results[0].photo,
      };

      res.render("heroes/edit-hero", {
        title: "Update Hero",
          isLogin: true,
        hero,
        })
    })
    conn.release();
  });
});


router.post("/edit/:id", uploadFile("image"), function (req, res) {
    let { id, name, typeId, oldImage } = req.body;
  
    let image = oldImage.replace(pathFile, "");
  
    if (req.file) {
      image = req.file.filename;
    }
  
    const query = "UPDATE heroes_tb SET name = ?, type_id= ?, photo = ? WHERE id = ?";
  
    dbConnection.getConnection((err, conn) => {
      if (err) throw err;
  
      conn.query(query, [name, typeId, image, id], (err, results) => {
        if (err) {
          console.log(err);
        }
        res.redirect("/");
      });
  
      conn.release();
    });
  });
  



module.exports = router;
