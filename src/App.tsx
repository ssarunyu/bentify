import Login from "./components/Login"
import Content from "./components/Content";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [accessToken, setAccessToken] = useState('')
  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get('access_token');
    if(token) {
      console.log(token)
      setAccessToken(token)
      // Privacy clear access token form url bar because useState control it
      window.location.hash = ''
    } else {
      console.log('need login')
    }
  }, [])

  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        {!accessToken ? (<Login />) : (<Content accessToken={accessToken} />)}
      </div>
      <Footer />
    </div>
  )
}

export default App
