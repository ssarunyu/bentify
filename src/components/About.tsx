import { Link } from "react-router-dom";

import Footer from "./Footer";

function About() {
    return (
        <div className="w-full h-screen bg-gray-900 text-white">
            <div className="p-5 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">About</h1>
                <p className="mt-5 text-sm">
                    Bentify is my mini-project that I *FORCE* myself try to work with React and API.
                    Bentify takes inspiration from <a className="underline" href="https://receiptify.herokuapp.com/" target="_blank">Receiptify</a> but I want to explore your Spotify data into a bento UI style (I know some UI almost be the same I try to improve in future)
                    and improve my coding skill (well that still... weird)
                    Bentify does not collect any of your data. To learn more about how I handle your information, please visit the
                    <Link to="/privacy" className="underline"> Privacy & Policy</Link> page.
                </p>
                <span className="text-xs mt-10">Thank you, and I hope you enjoy. <a className="underline" href="https://www.instagram.com/sarxnyu/" target="_blank">ssarunyu</a></span>
            </div>
            <Footer />
        </div>
    )
}

export default About