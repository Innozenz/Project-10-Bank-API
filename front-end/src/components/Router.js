// React Router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Pages

// Component
import Profile from "../pages/Profile";
import App from "../App";

function MyRouter () {

    return (
        <Router>
            <div className="body">
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/profile/*" element={<Profile />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default MyRouter