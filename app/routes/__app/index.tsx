import { Link } from "@remix-run/react";

export default function IndexExpense(){
    return(
        <div className="mt-10">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    </div>
                    <div>
                        <Link to={'expenses'}>
                            <button className="bg-blue-700 p-4 rounded-lg font-bold text-white">Getting Started</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}