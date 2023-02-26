import { myImg, navInfo, navLogo, navSocialIcons, phoneNavInfo } from '@/pages/api/hello'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5">
            <div className="flex justify-between">
                <div className='flex justify-start'>
                    <div>
                        <Link href={"/"} className="py-1 px-3">
                            <span className="text-xl italic font-bold whitespace-nowrap">{navLogo}</span>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:block flex ml-auto'>
                    <div className='flex'>
                        {navInfo.map(({ href, label }) => (
                            <Link key={label} href={href}
                                className="py-1 px-3 font-semibold text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700">
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='hidden md:block flex ml-auto'>
                    <div className='flex'>
                        {navSocialIcons.map((link, index) => (

                            <Link href={link.href} key={index} target="_blank" rel="noopener noreferrer"
                                className="py-1 px-3 text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700">
                                {link.icon}
                            </Link>

                        ))}
                    </div>
                </div>
                <div>
                    <button
                        className="flex items-center justify-center w-8 h-8 text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900 md:hidden"
                        onClick={handleToggle}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            <div
                className={`${isOpen ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-full bg-gray-100`}
                id="navbar-default"
            >
                <div className="w-full md:w-1/2 bg-white">
                    <div className="flex justify-between px-4 py-3">
                        <div>
                            <Link href={'/'} className="py-1 px-3">
                                <span className="text-xl italic font-bold whitespace-nowrap">{navLogo}</span>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button onClick={handleToggle} className="text-gray-600 focus:outline-none">
                                <FaTimes />
                            </button>
                        </div>
                    </div>
                    <div className="py-8 px-4">
                        <div className="mb-4">
                            <img src={myImg} className="rounded-full w-20 h-20" />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700 font-medium">{phoneNavInfo}</p>
                        </div>

                        <div className='divide-y'>
                            {navInfo.map(({ href, label }) => (
                                <Link key={label} href={href}
                                    className="block py-3 text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0">
                                    {label}
                                </Link>
                            ))}

                        </div>
                        <div>
                            {navSocialIcons.map((link, index) => (

                                <Link href={link.href} key={index} target="_blank" rel="noopener noreferrer"
                                    className="block py-3 text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0">
                                    {link.icon}
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;