import React from 'react'
import Link from 'next/link'

export default function ListNotifications () {
    const [items, setItems] = React.useState([])
  
    React.useEffect(() => {
      async function fetchData() {
        const res = await fetch(`${process.env.API_URL}notifications`)
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
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">channel</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Subject</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Sent At</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">User Id</th>
                </tr>
            </thead>
            <tbody>
        {items.map(item => (
            <tr className="border-b" key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.channel}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.subject}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.sentAt}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.userId}</td>
            </tr>
        ))}
            </tbody>
        </table>
    </main>
    )
  }