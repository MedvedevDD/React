import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'/>
            </header>
            <nav className='nav'>
                <div >
                    <div>
                        <a>Profile</a>
                    </div>
                    <div>
                        <a>Messages</a>
                    </div>
                    <div>
                        <a>News</a>
                    </div>
                    <div>
                        <a>Music</a>
                    </div>
                    <div>
                        <a>Settings</a>
                    </div>
                </div>
            </nav>
            <div className='content'>
                <div>
                <img src='https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg'/>
                </div>
                <div>
                    ava+descr
                </div>
                <div>
                    My post
                </div>
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
