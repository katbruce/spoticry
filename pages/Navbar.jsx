import Link from 'next/link';

function Navbar (){
    return (
    <header>
      <div className="flex-1">
        <h1>Spoticry</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/HomePage">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Playlists">
              Playlists
            </Link>
          </li>
          <li>
            <Link href="/Profile">
              Profile
            </Link>
          </li>
        </ul>
        </nav>
        </header>
      ) 
}

export default Navbar