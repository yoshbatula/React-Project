import Logo from './images/Umerch-Logo.png'

function navbar() {
    return(
        <div className="bg-[#9C0306] mb-200 w-420 h-25">
            <div className='flex flex-row'>
                 <div className="ml-3">
                <img className="h-20" src={Logo} alt=""/>
            </div>
                <div className='flex flex-row ml-4 mt-8 text-base'>
                    <nav className='text-white'>
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">SHOP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default navbar