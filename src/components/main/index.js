import './style.css' 
import { Theme } from '../../components'

const Main = () => (
	<main>
      <div className="container my-5">

        <p className="fs-2 text-center intro-text lh-sm mb-5 text-secondary">Welcome! This is <span>Bright</span>, a very clean Wordpress psd file theme. That makes it easy to showcase your work</p>

        <ul className="themes-list list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
            <Theme theme={{title: 'Keira', autor: 'inaikas', img:'files/theme1.jpg'}}/>
            <Theme theme={{title: 'SRK', autor: 'theme_ocean', img:'files/theme2.jpg' }}/>
            <Theme theme={{title: 'EduPro', autor: 'gonthemes', img:'files/theme3.jpg' }}/>
            <Theme theme={{title: 'EightyDays', autor: 'GretaThemes', img:'files/theme4.jpg' }}/>
            <Theme theme={{title: 'Lily', autor: 'AqThemes', img:'files/theme5.jpg' }}/>
            <Theme theme={{title: 'Daisy', autor: 'AqThemes', img:'files/theme6.jpg' }}/>
            <Theme theme={{title: 'Nutritia', autor: 'YetiTeam', img:'files/theme7.jpg' }}/>
            <Theme theme={{title: 'Techup', autor: 'YetiTeam', img:'files/theme8.jpg' }}/>
            <Theme theme={{title: 'Kanter', autor: 'BrainiakThemes', img:'files/theme9.jpg' }}/>
            <Theme theme={{title: 'Moreno', autor: 'Brickthemes', img:'files/theme10.jpg' }}/>
            <Theme theme={{title: 'Homeswort', autor: 'RockThemes', img:'files/theme11.jpg' }}/>
            <Theme theme={{title: 'Angel', autor: 'iamAbdus', img:'files/theme12.jpg' }}/>
        </ul>

        <div className="mt-5" aria-label="Навигация по страницам">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link text-black-50" href="#" aria-label="Предыдущая"  tabIndex="-1" aria-disabled="true">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active" aria-current="page"><a className="page-link text-black-50" href="#">1</a></li>
            <li className="page-item"><a className="page-link text-black-50" href="#">2</a></li>
            <li className="page-item"><a className="page-link text-black-50" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link text-black-50" href="#" aria-label="Следующая">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </main>
) 

export { Main } 