import mongoose, { Document, Model } from 'mongoose'

export interface IBooking extends Document {
  userId: mongoose.Types.ObjectId
  bookingDate: Date
  service: string
  status: 'pending' | 'approved' | 'rejected'
  adminNotes?: string
  createdAt: Date
  updatedAt: Date
}

const BookingSchema = new mongoose.Schema<IBooking>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookingDate: { type: Date, required: true },
    service: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    adminNotes: { type: String },
  },
  { timestamps: true }
)

const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema)

export default Booking
