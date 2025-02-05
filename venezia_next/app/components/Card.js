export default function Card() {
    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen bg-pink-100 p-4 gap-6">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                    src="https://blog.venicecitytours.it/wp-content/uploads/2024/03/gabbiano-vola-sul-canal-grande-di-fronte-a-rialto-e-sopra-le-gondole.jpg"
                    alt="Traghetto Venezia Easy"
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-6 sm:p-8 md:p-11">
                    <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                        Venezia Easy – Andata & Ritorno per Venezia San...
                    </h2>
                    <p className="text-gray-700 text-xs sm:text-sm pt-2 sm:pt-3">
                        <span>Partenza: </span><span className="font-bold">Punta Sabbioni</span>
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm pt-2 sm:pt-3">
                        <span>Durata: </span><span className="font-bold">30 min</span>
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm pt-2 sm:pt-3">
                        <span>Disponibile dal: </span>
                        <span className="font-bold">14 aprile 2025 al 5 ottobre 2025</span>
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
                        <button className="bg-[#99006e] text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-full hover:bg-purple-700 w-full sm:w-auto">
                            PRENOTA
                        </button>
                        <div className="text-center sm:text-left space-y-1 mt-3 sm:mt-0 sm:pl-4">
                            <p className="text-xs sm:text-sm font-light">Da</p>
                            <p className="text-lg sm:text-2xl font-bold text-gray-900">15,00€</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                    src="./images/burano.webp"
                    alt="Traghetto Venezia Easy"
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-6 sm:p-8 md:p-11">
                    <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                        Tour 2 Isole: Murano e Burano - Mattina o...
                    </h2>
                    <p className="text-gray-700 text-xs sm:text-sm pt-2 sm:pt-3">
                        <span>Partenza: </span><span className="font-bold">Venezia</span>
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm pt-2 sm:pt-3">
                        <span>Durata: </span><span className="font-bold">4,5h</span>
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm pt-2 sm:pt-3">
                        <span>Disponibile dal: </span>
                        <span className="font-bold">1 aprile 2024 al 31 marzo 2026</span>
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
                        <button className="bg-[#99006e] text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-full hover:bg-purple-700 w-full sm:w-auto">
                            PRENOTA
                        </button>
                        <div className="text-center sm:text-left space-y-1 mt-3 sm:mt-0 sm:pl-4">
                            <p className="text-xs sm:text-sm font-light">Da</p>
                            <p className="text-lg sm:text-2xl font-bold text-gray-900">30,00€</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
