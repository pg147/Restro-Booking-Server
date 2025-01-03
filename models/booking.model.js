import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        guestsCount: {
            type: Number,
            required: true
        },
        bookingDate: {
            type: String,
            required: true
        },
        bookingSlot: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const Booking = new mongoose.model("booking", schema); 

export default Booking;