import mongoose from "mongoose";

const markerSchema = mongoose.Schema({
    uploader: String,
    description: String,
    type: String,
    latitude: Number,
    longitude: Number,
    image: String
}, {
    timestamps: true
})

export const Marker = mongoose.model('Marker', markerSchema)