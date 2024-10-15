function Login() {
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = 'https://bentify.vercel.app';
  // const REDIRECT_URI = 'http://localhost:5173';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPE = 'user-top-read';

  const loginHandle = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`;
  }

  return (
    <div>
        <button className="px-5 py-2 bg-[#22D05D] rounded-md text-white" onClick={loginHandle}>Login with Spotify</button>
    </div>
  )
}

export default Login
