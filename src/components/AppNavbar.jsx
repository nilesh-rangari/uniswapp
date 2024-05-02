import { Link } from "react-router-dom";

function AppNavbar(){
    return(
        <nav className="flex p-5">
            <div>
                <Link to = "/pool">
                    <a href="" className="text-white">pool</a>
                </Link>
            </div>
        </nav>
    )
}

export default AppNavbar