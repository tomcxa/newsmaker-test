import React from 'react'

const Navbar = () => {
    return (
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-list__item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
