const router = require('express').Router();
const AnalyticalData = require("../models/AnalyticaData");


router.post('/addData', async(req,res)=>{
    const newData = new AnalyticalData(req.body);
    try {
        const addedData = await newData.save();
        res.status(201).json(addedData);
    } catch (err) {
        res.status(500).json(err)
    }
 })

router.get('/getSpecificData/:id', async(req,res)=>{
    try {
        const fetchData = await AnalyticalData.findById(req.params.id);
        res.status(200).json(fetchData);
    } catch (err) {
        res.status(500).json(err)
    }
 })

router.get('/getAllData', async(req,res)=>{
    try {
        const fetchAllData = await AnalyticalData.find();
        res.status(200).json(fetchAllData);
    } catch (err) {
        res.status(500).json(err)
    }
 })

module.exports = router;