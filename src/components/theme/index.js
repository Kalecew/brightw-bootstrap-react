import './style.css' 

const Theme = ({ theme }) => (
    <li className="col">
      <div className="card h-100 border-0">              
        <div className="card-body text-center">
          <a href="#" className="card-title text-secondary h4 text-decoration-none">{theme.title}</a>
          <p className="card-text text-black-50">от {theme.autor}</p>
        </div>
        <a href="#"><img src={theme.img} width="400" height="250" className="card-img-bottom" alt="..."/></a>
      </div>
    </li>
)

export { Theme } 