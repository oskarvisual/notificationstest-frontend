import React from 'react'
import Link from 'next/link'

export default function ListArticles () {
    const [items, setItems] = React.useState([])
  
    React.useEffect(() => {
      async function fetchData() {
        const res = await fetch(`${process.env.API_URL}articles`)
        const data = await res.json()
  
        setItems(data)
      }
      fetchData()
    }, [])
  
    return (
    <main className="flex flex-wrap mb-4 max-w-7xl mx-auto">
        {items.map(item => (
          <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg" key={item.id}>
            <div className="px-6 py-4">
                <Link href={`/articles/${item.id}`}>
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                </Link>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link href={`/categories/${item.categoryId}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.categoryTitle}</Link>
            </div>
        </div>
        ))}
      </main>
    )
  }
  