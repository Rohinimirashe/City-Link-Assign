const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const userSchema = new mongoose.Schema({


    context: {
        type: String
    },
    type: {
        type: String
    },
    bookingId: {
        type: String
    },
    source1: {
        type: String
    },
    status: {
        type: String
    },
    customer: {
        id: {

            type: ObjectId,

            ref: 'customer',
        },
        // "id": 10349,
        fullName: {
            type: String
        },
        mobile: {
            type: String
        },
        email: { type: String }
    },
    source: {
        name: { type: String },
        address: {
            address: {
                type: String
            },
            location: { type: String },
            city: { type: String },
            state: { type: String },
            postalCode: { type: String },
            country: { type: String }
        },
        latitude: { type: String },
        longitude: { type: String }
    },
    estination: {
        name: { type: String },
        address: {
            address: { type: String },
            location: { type: String },
            city: { type: String },
            state: { type: String },
            postalCode: { type: String },
            country: { type: String },
            coordinates: {
                latitude: {
                    type: String,
                    longitude: { type: String }
                }
            }
        },
        vendor: {
            id: 18567,
            id: {

                type: ObjectId,

                ref: 'vendor',
            },
            fullName: { type: String },
            vehicleNumber: { type: String },
            vehicleModel: { type: String }
        },
        bookingTime: {
            type: Date
        },
        pickupTime: {
            type: Date
        }
    }
}, { timestamps: true })


module.exports = mongoose.model("Rohini", userSchema)