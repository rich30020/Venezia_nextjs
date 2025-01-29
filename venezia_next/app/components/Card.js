export default function Card() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-200">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                    src="https://blog.venicecitytours.it/wp-content/uploads/2024/03/gabbiano-vola-sul-canal-grande-di-fronte-a-rialto-e-sopra-le-gondole.jpg"
                    alt="Traghetto Venezia Easy"
                    className="w-full h-48 object-cover"
                />
                <div className="p-11">
                    <h2 className="text-xl font-medium text-gray-900 mb-2">
                        Venezia Easy – Andata & Ritorno per Venezia San...
                    </h2>
                    <p className="text-gray-700 text-sm pt-3">
                        <span>Partenza: </span><span className="font-bold">Punta Sabbioni</span>
                    </p>
                    <p className="text-gray-700 text-sm pt-3">
                        <span>Durata: </span><span className="font-bold">30 min</span>
                    </p>
                    <p className="text-gray-700 text-sm pt-3">
                        <span>Disponibile dal: </span><span className="font-bold">14 aprile 2025 al 5 ottobre 2025</span>
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                        <button className="bg-[#99006e] text-white font-semibold py-4 px-10 rounded-full hover:bg-purple-700">
                            PRENOTA
                        </button>
                        <div className="space-y-1 pl-3 pr-20">
                            <p className="text-sm font-light justify-start">Da</p>
                            <p className="text-2xl font-bold text-gray-900">15,00€</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
