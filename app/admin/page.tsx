"use client"
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface Booking {
  id: string
  user: {
    id: string
    name: string
    email: string
  }
  bookingDate: string
  service: string
  status: string
  adminNotes?: string
  createdAt: string
}

export default function AdminPage() {
  const { data: session, status } = useSession()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([])
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (session?.user.role === 'admin') {
      fetchBookings()
    }
  }, [session])

  useEffect(() => {
    if (statusFilter === 'all') {
      setFilteredBookings(bookings)
    } else {
      setFilteredBookings(bookings.filter(booking => booking.status === statusFilter))
    }
  }, [bookings, statusFilter])

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/admin/bookings')
      if (response.ok) {
        const data = await response.json()
        setBookings(data.bookings)
      }
    } catch (error) {
      console.error('Error fetching bookings:', error)
    }
  }

  const updateBookingStatus = async (bookingId: string, status: string, adminNotes?: string) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, adminNotes }),
      })

      if (response.ok) {
        fetchBookings()
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to update booking')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (!session || session.user.role !== 'admin') {
    return <div className="flex justify-center items-center min-h-screen">Access denied. Admin only.</div>
  }

  return (
    <>
        <main className="mx-auto w-full px-6 bg-[#0000006e] bg-blend-overlay py-16 bg-[url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1762774213/d32fec43cdffe3f5cb38b11b959b772e6dd6ff85_o7bqjj.png)] h-[10vh] flex flex-col items-center justify-center bg-cover bg-center">
     
    </main>
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Admin Dashboard</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Filter */}
      <div className="mb-6">
        <label htmlFor="statusFilter" className="block text-sm font-medium mb-2">Filter by Status</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc9933]"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{booking.user.name}</div>
                    <div className="text-sm text-gray-500">{booking.user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.service}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(booking.bookingDate).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'approved' ? 'bg-green-100 text-green-800' :
                    booking.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {booking.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateBookingStatus(booking.id, 'approved')}
                        disabled={loading}
                        className="text-green-600 hover:text-green-900 disabled:opacity-50"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          const notes = prompt('Rejection notes (optional):')
                          updateBookingStatus(booking.id, 'rejected', notes || undefined)
                        }}
                        disabled={loading}
                        className="text-red-600 hover:text-red-900 disabled:opacity-50"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                  {booking.adminNotes && (
                    <div className="text-xs text-gray-500 mt-1">
                      Notes: {booking.adminNotes}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredBookings.length === 0 && (
          <div className="text-center py-8 text-gray-500">No bookings found.</div>
        )}
      </div>
    </main>

    </>
  )
}
