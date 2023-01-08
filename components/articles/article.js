import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Article ( ) {
    const [data, setItems] = React.useState([])
    const router = useRouter()
    const params = router.query
    console.log(`${process.env.API_URL}articles/show/${params.id}`);
  
    React.useEffect(() => {
      async function fetchData() {
        const res = await fetch(`${process.env.API_URL}articles/show?id=${params.id}`)
        const data = await res.json()
        
        setItems(data)
      }
      fetchData()
    }, [])
  
    return (
    <main className="mb-4 max-w-7xl mx-auto">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{data.title}</div>
                <div className="pt-4 pb-2">
                    <Link href={`/categories/${data.categoryId}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.categoryTitle}</Link>
                </div>
            </div>
            <div className="px-6 py-4" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
      </main>
    )
  }
  