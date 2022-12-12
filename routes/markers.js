import express from "express"
import { Marker } from "../models/marker.js"

export const router = express.Router()

router.get("/markers", async (req, res) => {

    console.log("get recieved");

    try {
        const markers = await Marker.find(req.query);
        res.status(200).json(markers);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post("/markers", async (req, res) => {
    const markerData = req.body;

    console.log(markerData);
    console.log("post recieved");

    try {
        const marker = new Marker(markerData);
        await marker.save();
        res.status(201).json(marker);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete("/markers", async (req, res) => {
    const id = req.body.id;
    console.log(id);
    console.log("delete");
    try {
        await Marker.deleteOne({_id: id})
        res.status(204).end()
    } catch (error) {
        res.status(500).json(error);
    }
})

export { router as Markers }