import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-dark bg-transparent">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Web Developer Arshad</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <span>Menu</span> <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="offcanvas offcanvas-end bg-transparent menu" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <h2 class="mt-3 mx-auto" id="offcanvasWithBothOptionsLabel">Menu</h2>
                            <div type="button" class="text-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</div>
                        </div>
                        <hr />
                        <div class="offcanvas-body ">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#services">Skills</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact Me</a>
                            </li>
                            <li class="nav-item dropdown">
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Header
