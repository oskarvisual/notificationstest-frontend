import React from 'react'
import Link from 'next/link'

export default function ListUsers () {
    const [items, setItems] = React.useState([])
  
    React.useEffect(() => {
      async function fetchData() {
        const res = await fetch(`${process.env.API_URL}users`)
        const data = await res.json()
  
        setItems(data)
      }
      fetchData()
    }, [])
  
    return (
    <main className="mb-4 max-w-7xl mx-auto">
        <table className="min-w-full table-auto hover:table-fixed">
            <thead className="border-b">
                <tr>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ID</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Phone</th>
                </tr>
            </thead>
            <tbody>
        {items.map(item => (
            <tr className="border-b" key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.phoneNumber}</td>
            </tr>
        ))}
            </tbody>
        </table>
    </main>
    )
  }