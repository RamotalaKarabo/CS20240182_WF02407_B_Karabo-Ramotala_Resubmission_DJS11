import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import MainLayout from './layout/MainLayout'
import PodcastLayout from './layout/PodcastLayout'
import AuthenticationLayout from './layout/AuthenticationLayout'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Categories from './pages/Categories'
import Profile from './pages/Profile'
import AllPodcasts from './pages/AllPodcasts'
import Podcast from './pages/Podcast'
import Episodes from './pages/Episodes'
import Category from './pages/Category'
import Favorites from './pages/Favorites'

const App = () => {
  return (
    <div className="">

      <Router>
        <Routes>

          {/* Page Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>} /> {/*Homepage */}
            <Route path="categories" element={<Categories />} /> {/*Categories Page */}
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>


          {/* Podcast Route */}
          <Route path="/all-podcasts" element={<PodcastLayout />}>
            <Route index element={<AllPodcasts />} />
            <Route path="show/:showId/seasons" element={<Podcast />}/>
          </Route>
          
          <Route path="/category/:genreId/:genre" element={<Category />}/>
          <Route path="/:showId/seasons/:seasonId" element={<Episodes />}/>
          <Route path="/favorites" element={<Favorites/>} />

          {/* Authentication Route (Log-In || Sign-In) */}
          <Route path="/" element={<AuthenticationLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App