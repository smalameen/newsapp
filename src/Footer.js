import React from 'react'

const Footer = () => {
  return (
   
      <div
        style={{
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <div className='container'>
          <div className="row">
            <a style={{ color: 'black' }} to="/home">
              <div className="col-md-3">
                <p>BizCrunch</p>
              </div>{' '}
            </a>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 mt-sm-2">
                  <h5>Need Help?</h5>
                  <small> Live Chat</small> <br />
                  <small> Customer Care</small> <br />
                  <small> Gift Order</small> <br />
                  <small> Send your feedback</small>
                </div>
                <div className="col-md-3  mt-sm-2">
                  <h5>Our Digital Resources</h5>
                  <small>Articles</small> <br />
                  <small> E-book</small>
                </div>

                <div className="col-md-3">
                  <h5>Contact With us</h5>
                  <div className="d-flex">
                    <i class="fab fa-instagram" style={{ fontSize: '20px' }}></i>
                    <i
                      class="fab fa-aedin-square"
                      style={{ fontSize: '20px' }}
                    ></i>
                    <i class="fab fa-whatsapp" style={{ fontSize: '20px',marginLeft:"10px" }}></i>
                    <i class="fab fa-facebook" style={{ fontSize: '20px',marginLeft:"10px"  }}></i>
                    <i
                      class="fab fa-youtube-play"
                      style={{ fontSize: '20px' }}
                    ></i>
                  </div>
                </div>
                <div className="col-md-3">
                  <h5>Join Our news letter</h5>
                  <small>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem commodi asperiores odio, nam distinctio soluta iste
                    repellendus id repellat optio.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr  />
        <h6 style={{ marginTop: '2rem' }} className="text-center">
          All right reserved by @BizCrunch
        </h6>
      </div>

  )
}

export default Footer
