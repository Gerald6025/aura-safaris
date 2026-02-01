"use client"
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface Booking {
  id: string
  bookingDate: string
  service: string
  status: string
  adminNotes?: string
  createdAt: string
}

export default function BookPage() {
  const { data: session, status } = useSession()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [formData, setFormData] = useState({
    bookingDate: '',
    service: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (session) {
      fetchBookings()
    }
  }, [session])

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings')
      if (response.ok) {
        const data = await response.json()
        setBookings(data.bookings)
      }
    } catch (error) {
      console.error('Error fetching bookings:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingDate: formData.bookingDate,
          service: formData.service,
        }),
      })

      if (response.ok) {
        setSuccess('Booking created successfully!')
        setFormData({ bookingDate: '', service: '' })
        fetchBookings()
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to create booking')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (status === 'loading') {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (!session) {
    return <div className="flex justify-center items-center min-h-screen">Please sign in to access this page.</div>
  }

  return (
    <>
    <main className="mx-auto w-full px-6 bg-[#0000006e] bg-blend-overlay py-16 bg-[url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1762774213/d32fec43cdffe3f5cb38b11b959b772e6dd6ff85_o7bqjj.png)] h-[10vh] flex flex-col items-center justify-center bg-cover bg-center">
    </main>
    <main className="mx-auto max-w-6xl px-6 py-16">
<h1 className="text-7xl  font-bold  text-left">Bookings</h1>
      {/* Create Booking Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Create New Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">Service/Resource</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            >
              <option value="">Select a service</option>
              <option value="Wildlife Safari">Wildlife Safari</option>
              <option value="Victoria Falls Tour">Victoria Falls Tour</option>
              <option value="Adventure Activity">Adventure Activity</option>
              <option value="Luxury Package">Luxury Package</option>
              <option value="Lodge Stay">Lodge Stay</option>
              <option value="Camping">Camping</option>
            </select>
          </div>

          <div>
            <label htmlFor="bookingDate" className="block text-sm font-medium mb-2">Booking Date & Time</label>
            <input
              type="datetime-local"
              id="bookingDate"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center rounded-md bg-[#cc9933] px-6 py-3 text-sm font-medium text-white hover:bg-[#b3832b] transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Booking'}
          </button>
        </form>
      </div>

      {/* Bookings List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{booking.service}</h3>
                    <p className="text-sm text-gray-600">
                      Date: {new Date(booking.bookingDate).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Created: {new Date(booking.createdAt).toLocaleDateString()}
                    </p>
                    {booking.adminNotes && (
                      <p className="text-sm text-gray-600 mt-2">
                        Notes: {booking.adminNotes}
                      </p>
                    )}
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'approved' ? 'bg-green-100 text-green-800' :
                    booking.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
    </>
  )
}
