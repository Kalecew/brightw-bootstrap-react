import react from 'react' 
import './style.css' 

const Header = () => (
	<header className="my-5 py-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container h-100">
          <a className="navbar-brand h-100 me-5" href="#">
            <img className="position-relative bottom-50" src="img/logo.png" alt="" width="120" height="120"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-white pb-3 pb-lg-0" id="navbarSupportedContent">
            <ul className="menu navbar-nav me-auto ms-0 ms-lg-5 mb-2 mb-lg-0 mt-5 mt-lg-0 gap-0 gap-lg-4 fs-5">
              <li className="nav-item">
                <a className="text-uppercase nav-link border-bottom border-2 border-white text-black-50 px-0 active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="text-uppercase nav-link border-bottom border-2 border-white text-black-50 px-0" href="#">Portfolio</a>
              </li> 
              <li className="nav-item">
                <a className="text-uppercase nav-link border-bottom border-2 border-white text-black-50 px-0" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="text-uppercase nav-link border-bottom border-2 border-white text-black-50 px-0" href="#">Contact</a>
              </li>
            </ul>

            <ul className="social-button navbar-nav mb-2 mb-lg-0 gap-2 flex-row">
              <li className="nav-item">
                <a className="nav-link bg-secondary bg-opacity-25 text-white rounded-circle p-0 text-center fab fa-facebook-f" href="#">
                  <span className="visually-hidden-focusable">facebook</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link bg-secondary bg-opacity-25 text-white rounded-circle p-0 text-center fab fa-twitter" href="#">
                  <span className="visually-hidden-focusable">twitter</span>
                </a>
              </li> 
              <li className="nav-item">
                <a className="nav-link bg-secondary bg-opacity-25 text-white rounded-circle p-0 text-center fab fa-google-plus-g" href="#">
                  <span className="visually-hidden-focusable">google plus</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link bg-secondary bg-opacity-25 text-white rounded-circle p-0 text-center fas fa-rss" href="#">
                  <span className="visually-hidden-focusable">rss</span>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
) 

export { Header } 