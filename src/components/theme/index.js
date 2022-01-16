import react from 'react' 
import './style.css' 

const Theme = (theme) => (
    <li class="col">
      <div class="card h-100 border-0">              
        <div class="card-body text-center">
          <a href="#" class="card-title text-secondary h4 text-decoration-none">${theme.title}</a>
          <p class="card-text text-black-50">от ${theme.autor}</p>
        </div>
        <a href="#"><img src="files/${theme.img}" width="400" height="250" class="card-img-bottom" alt="..."/></a>
      </div>
    </li>
)

export { Theme } 