"use client"
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function BookPage() {
  const searchParams = useSearchParams()
  const [bookingType, setBookingType] = useState<'accommodation' | 'activity'>('activity')
  const [activity, setActivity] = useState('')
  const [accommodation, setAccommodation] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    requests: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const activityParam = searchParams.get('activity')
    if (activityParam) {
      setBookingType('activity')
      setActivity(activityParam)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to backend
    setSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitted) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-lg">Thank you for booking with Aura Safaris. We'll contact you soon with more details.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[#cc9933] px-6 py-3 text-sm font-medium text-white hover:bg-[#b3832b]"
          >
            Book Another
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Book Now</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Booking Type</label>
          <div className="flex gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="bookingType"
                value="activity"
                checked={bookingType === 'activity'}
                onChange={() => setBookingType('activity')}
                className="mr-2"
              />
              Activity
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="bookingType"
                value="accommodation"
                checked={bookingType === 'accommodation'}
                onChange={() => setBookingType('accommodation')}
                className="mr-2"
              />
              Accommodation
            </label>
          </div>
        </div>

        {bookingType === 'activity' && (
          <div>
            <label htmlFor="activity" className="block text-sm font-medium mb-2">Select Activity</label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            >
              <option value="">Choose an activity</option>
              <option value="Wildlife Safaris">Wildlife Safaris</option>
              <option value="Victoria Falls Tours">Victoria Falls Tours</option>
              <option value="Adventure Activities">Adventure Activities</option>
              <option value="Luxury Packages">Luxury Packages</option>
            </select>
          </div>
        )}

        {bookingType === 'accommodation' && (
          <div>
            <label htmlFor="accommodation" className="block text-sm font-medium mb-2">Select Accommodation</label>
            <select
              id="accommodation"
              value={accommodation}
              onChange={(e) => setAccommodation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            >
              <option value="">Choose accommodation</option>
              <option value="Lodge Stays">Lodge Stays</option>
              <option value="Camping">Camping</option>
              <option value="Luxury Tents">Luxury Tents</option>
              <option value="Private Villas">Private Villas</option>
            </select>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            />
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium mb-2">Check-in Date</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            />
          </div>
          <div>
            <label htmlFor="checkOut" className="block text-sm font-medium mb-2">Check-out Date</label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="requests" className="block text-sm font-medium mb-2">Special Requests</label>
          <textarea
            id="requests"
            name="requests"
            value={formData.requests}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
            placeholder="Any special requests or requirements..."
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center rounded-md bg-[#cc9933] px-6 py-3 text-sm font-medium text-white hover:bg-[#b3832b] transition-colors"
        >
          Submit Booking
        </button>
      </form>
    </main>
  )
}
