import './App.css';
import { Carousel } from 'bootstrap';
import pic1 from './Photo/Manali/p1.jpg';
import pic2 from './Photo/Manali/p2.jpg';
import pic3 from './Photo/Manali/p3.jpg';
import pic4 from './Photo/Manali/p4.jpg';
import pic5 from './Photo/Manali/p5.jpg';
import pic6 from './Photo/Manali/p6.jpg';
import pic7 from './Photo/Manali/p7.jpg';
import pic8 from './Photo/Manali/p8.jpg';

import fbIcon from './Icons/facebook.svg';
import igIcon from './Icons/instagram.svg';



function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand"><b>Lalit Chahal</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Places
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Manali</a></li>
                  <li><a className="dropdown-item" href="#">Shimla</a></li>
                  <li><a className="dropdown-item" href="#">Churdhar</a></li>
                  <li><a className="dropdown-item" href="#">Kufri</a></li>
                  <li><a className="dropdown-item" href="#">Amritsar</a></li>
                  <li><a className="dropdown-item" href="#">Others</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval={false}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic1} className="d-block w-100" alt="Manali" />
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="Manali" />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="Manali" />
          </div>
          <div className="carousel-item">
            <img src={pic4} className="d-block w-100" alt="Manali" />
          </div>
          <div className="carousel-item">
            <img src={pic5} className="d-block w-100" alt="Manali" />
          </div>
          <div className="carousel-item">
            <img src={pic6} className="d-block w-100" alt="Manali" />
          </div>
          <div className="carousel-item">
            <img src={pic7} className="d-block w-100" alt="Manali" />
          </div>
          <div className="carousel-item">
            <img src={pic8} className="d-block w-100" alt="Manali" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* code for cards */}

      <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
        <div className="col">
          <div className="card">
            <img src={pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lalit Chahal</h5>
              {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={pic4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Solang Valley</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={pic3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mountain Top</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={pic7} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Solang River</h5>
            </div>
          </div>
        </div>
      </div>



      {/* code for footer */}
      <div className="container mt-5">
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a style={{ width: '20%' }} href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              Home
            </a>
            <span style={{ width: '80%' }} className="text-muted">© 2021 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/chahal.lalit007" target={'_blank'}><img style={{ height: '20px' }} src={fbIcon} alt="FB" /></a></li>
            <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/chahal.lalit007" target={'_blank'}><img style={{ height: '20px' }} src={igIcon} alt="IG" /></a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
