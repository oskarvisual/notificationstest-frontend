import React from 'react'

export default function CheckboxChannels () {
    const [items, setItems] = React.useState([])
  
    React.useEffect(() => {
      async function fetchData() {
        const res = await fetch(`${process.env.API_URL}channels`)
        const data = await res.json()

        let channels = [];
        for (let [key, channel] of Object.entries(data)) {
            channels.push({
                'key': key,
                'channel': channel
            });
        }
  
        setItems(channels)
      }
      fetchData()
    }, [])
  
    return (
    <div class="flex items-center mb-4">
        <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
            {items.map(item => (
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out" key={item.key}>
                    <input name="channels[]" value={item.key} type="checkbox" className="checkbox-channels w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.channel}</label>
                </li>
            ))}
        </ul>
    </div>
    )
  }