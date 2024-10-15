import Footer from "./Footer"

function Privacy() {
    return (
        <div className="w-full h-screen bg-gray-900 text-white">
            <div className="p-5 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">Privacy & Policy</h1>
                <p className="mt-5 text-sm">
                    This app uses the Spotify Web API to display your top artists (and tracks in future). By using this app, you consent to the use of your Spotify account information, including your username and listening data
                    (this will ask before you auth)
                    Bentify NOT stored or collected your data anywhere
                    If your worries about your data you can easily go to <a target="_blank" className="underline" href="https://www.spotify.com/th-th/account/apps/">Spotify App Management</a> and remove 'Bentify'
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy