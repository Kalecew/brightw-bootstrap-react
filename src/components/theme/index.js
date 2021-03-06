import PropTypes from 'prop-types' 
import './style.css' 

const Theme = ({ title,autor,img }) => (
    <li className="col">
      <div className="card h-100 border-0">              
        <div className="card-body text-center">
          <a href="#" className="card-title text-secondary h4 text-decoration-none">{title}</a>
          <p className="card-text text-black-50">от {autor}</p>
        </div>
        <a href="#"><img src={img} width="400" height="250" className="card-img-bottom" alt="..."/></a>
      </div>
    </li>
)

Theme.propTypes = {
    theme: PropTypes.shape({
        title: PropTypes.string,
        autor: PropTypes.string,
        img: PropTypes.string
    }).isRequired
}

export { Theme } 