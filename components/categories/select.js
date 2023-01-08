import React from 'react'

export default function SelectCategories () {
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
    <>
        {items.map(item => (
          <option value={item.id} key={item.id}>{item.title}</option>
        ))}
      </>
    )
  }