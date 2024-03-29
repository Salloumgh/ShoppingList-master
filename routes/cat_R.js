const express = require('express');
const router = express.Router()
module.exports = router;

const catModel = require("../models/cat_M");

router.get('/Add', (req, res) => {
    res.render("catAdd", {
        pageTitle: "הוספת קטגוריה",
        item: {}
    });
});
router.post('/Add', (req, res) => {
    const modelData = new catModel({
        name: req.body.name
    });
    modelData.save();
    res.redirect("/C/List");
});
router.get('/List', async(req, res) => {
    let cat_data = await catModel.find();
    res.render("catList", {
        pageTitle: "ניהול קטגוריות",
        data: cat_data
    });
});
router.get('/Edit', async(req, res) => {
    let item_data = await catModel.findById(req.query.id);
    res.render("catAdd", {
        pageTitle: "עריכת קטגוריה",
        item: item_data
    });
});
router.post('/Edit', async(req, res) => {
    const modelData = {
        name: req.body.name
    };
    let item_data = await catModel.findByIdAndUpdate(req.query.id, modelData);
    res.redirect("/C/List");
});

/*pouter.get('/Delete', async(req, res) => {
    let item_data = await catModel.findByIdAndDelete(req.query.id);
    res.redirect("/C/List")
})*/