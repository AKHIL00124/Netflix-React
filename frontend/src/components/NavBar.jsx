import {Link} from 'react-router-dom';
import '../css/Navbar.css' 
import { searchMovies } from '../services/api';
import { useLocation } from 'react-router-dom';

function NavBar() {

    // const [searchQuery, setSearchQuery] = useState("");
    // const [loading, setLoading] = useState(true);
    
    const location = useLocation();

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    };

    return (
        <nav className='navbar'>
            <div className="navbar-brand">
                <Link to="/">Netflix</Link>
            </div>




            {/* { location.pathname === '/' &&  (
                <div>
                    <form onSubmit={handleSearch} >
                        <input
                            type="text"
                            placeholder="Search for movies..."
                            // className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-button">
                            Search
                        </button>
                    </form>
                </div>
            )} */}



            {/* { location.pathname === '/' &&  (
                <form >
                    <input
                        type="text"
                        // placeholder="Search for movies..."
                        // value={searchQuery}
                        // onChange={(e) => setSearchQuery(e.target.value)}
                        // className="search-input"
                    />
                    <button type="submit" >
                        Search
                    </button>
                </form>
            )} */}



            <div className='navbar-links'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/Favorites' className='nav-link'>Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar;