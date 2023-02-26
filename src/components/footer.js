import Link from 'next/link'

const Footer = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-center">
                <span className="text-sm text-gray-700 sm:text-center dark:text-gray-700">
                    © 2023 created with &#10084; by

                    <Link href="https://asifulalam.me/"
                        className="hover:underline">
                        {" "} Asiful Alam
                    </Link>
                </span>
            </div>
        </div>

    );
};

export default Footer;