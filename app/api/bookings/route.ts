import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import dbConnect from '@/lib/db'
import Booking from '@/lib/models/Booking'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { bookingDate, service } = await request.json()

    if (!bookingDate || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await dbConnect()

    const booking = await Booking.create({
      userId: session.user.id,
      bookingDate: new Date(bookingDate),
      service,
    })

    return NextResponse.json({
      booking: {
        id: booking._id.toString(),
        userId: booking.userId.toString(),
        bookingDate: booking.bookingDate,
        service: booking.service,
        status: booking.status,
        adminNotes: booking.adminNotes,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
      }
    })
  } catch (error) {
    console.error('Create booking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()

    let bookings

    if (session.user.role === 'admin') {
      bookings = await Booking.find().populate('userId', 'name email')
    } else {
      bookings = await Booking.find({ userId: session.user.id })
    }

    return NextResponse.json({ bookings })
  } catch (error) {
    console.error('Get bookings error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
