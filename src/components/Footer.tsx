import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
    return (
        <div className="flex absolute justify-center items-center w-full bottom-0 p-2 space-x-5">
            <button className="underline text-sm" onClick={() => navigate('/')}>Home</button>
            <button className="underline text-sm" onClick={() => navigate('/privacy')}>Privacy & Policy</button>
            <button className="underline text-sm" onClick={() => navigate('/about')}>About</button>
        </div>
    )
}

export default Footer