import React, { useEffect, useState } from 'react'
import ShowNewsData from './ShowNewsData'

const NewsData = () => {
  const [items, setItems] = useState([])
console.log(items)

const apiKey =`5fd95991a45541189dfde8e9fb022b36`
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2022-04-07&sortBy=publishedAt&apiKey=${apiKey}`,
    )
      .then((response) => response.json())
      .then((req) => setItems(Object.values(req.articles)))
  }, []);
 
  return (
    <div>
      {items.map((item, key) => (
        <ShowNewsData itemData={item} itemDate={item.publishedAt}/>
      ))}
    </div>
  )
}

export default NewsData
