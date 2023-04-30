import Link from 'next/link';

function Navbar (){
    return (
    <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a  class="flex items-center">
            <img src="https://e.snmc.io/i/300/s/2f85d5fbbe60c1a3c40547a7586132c6/9356635" class="h-8 mr-3" alt="Spoticry Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Spoticry</span>
        </a>
        <div class="flex items-center">
            <a href="https://github.com/katbruce/spoticry" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">github</a>
            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Help Me</a>
        </div>
    </div>
</nav>
    <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
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
        </div>
    </div>
</nav>
</header>
      ) 
}

export default Navbar