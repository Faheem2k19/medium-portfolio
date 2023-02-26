import { mediumURL, socialprofils } from '@/pages/api/hello'
import { useEffect, useState } from 'react'
import Articlecard from './cards'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

const Allcards = () => {
    const [mediumData, setMediumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch(
            mediumURL
        )
            .then(res => res.json())
            .then(response => {
                setMediumData(response.items);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            {isLoading && <p>Fetching data from Medium...</p>}
            {error && <p>There was an error fetching the data: {error.message}</p>}
            {!isLoading && !error && (
                <>
                    <div className='pb-10 flex justify-center'>
                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4">
                            {mediumData.slice(0, 9).map((article) => (
                                <Articlecard article={article} />
                            ))}
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <Link href={socialprofils.medium} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center">
                                View All <HiOutlineArrowNarrowRight className="ml-2" size={20}/>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default Allcards;
