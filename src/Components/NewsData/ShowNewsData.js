import React from 'react'

const ShowNewsData = ({ itemData, itemDate }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <div className="container">
        <div className="row align-middle">
          <div className="col-md-4">
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              target="_blank"
              rel="noreferrer"
              href={itemData.url}
            >
              <h5 class="card-title">{itemData.title}</h5>
            </a>
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              target="_blank"
              rel="noreferrer"
              href={itemData.url}
            >
              <b>{itemData.author}</b> <p>{itemDate}</p>{' '}
            </a>
          </div>
          <div className="col-md-4">
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              target="_blank"
              rel="noreferrer"
              href={itemData.url}
            >
              <b>{itemData.description}</b>
            </a>
          </div>
          <div className="col-md-4">
            <img
              src={itemData.urlToImage}
              class="img-fluid rounded-end h-75 w-100"
              alt="..."
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default ShowNewsData
