import { header, myImg } from "@/pages/api/hello";

const Headerinfo = () => {
    return (
        <>
            <div className="py-24">
                <div className="lg:flex sm:flex-none md:flex-none justify-center lg:gap-24">
                    <div className="sm:mx-4 order-2 sm:order-1 lg:place-self-center">
                        <img src={myImg} className="rounded-full" />
                    </div>
                    <div className="mx-4 sm:w-64 md:w-4/5 lg:w-1/2">
                        <h2 className="sm:py-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl order-1 sm:order-2">
                            {header.info}
                        </h2>
                        <article className="prose">
                            <blockquote>
                                {header.info_two}
                            </blockquote>

                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Headerinfo;