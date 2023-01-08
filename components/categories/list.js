import React from 'react'
import Link from 'next/link'

export default function ListCategories () {
    const [items, setItems] = React.useState([])
  
    React.useEffect(() => {
      async function fetchData() {
        const res = await fetch(`${process.env.API_URL}categories`)
        const data = await res.json()
  
        setItems(data)
      }
      fetchData()
    }, [])
  
    return (
    <main className="mb-4 max-w-7xl mx-auto">
        <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
        
        {items.map(item => (
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out" key={item.id}>
                {item.title}
            </li>
        ))}
        </ul>
    </main>
    )
  }