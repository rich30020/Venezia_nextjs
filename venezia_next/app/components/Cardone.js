export default function CardContainer() {
    return (
        <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Prima Card */}
            <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-3xl overflow-hidden relative">
                <div className="w-full h-52 md:h-full">
                    <img 
                        src="./images/matrimonio.webp"
                        alt="Traghetto Venezia Easy"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-16 max-w-[90%] md:max-w-[50%]">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                        Matrimonio a Bordo
                    </h2>
                    <p className="text-white text-sm md:text-sm mb-3 md:mb-5">
                        Scopri il fascino di Venezia in un modo unico e romantico con il nostro servizio "Matrimonio a Bordo". 
                        Immagina di dire "Si" circondato dalle incantevoli acque della Serenissima.
                    </p>
                    <button className="bg-white text-[#99006e] font-semibold py-3 px-6 md:py-5 md:px-10 rounded-full text-sm md:text-md hover:bg-purple-700">
                        SCOPRI DI PIÙ
                    </button>
                </div>
            </div>
            
            {/* Seconda Card */}
            <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-3xl overflow-hidden relative">
                <div className="w-full h-52 md:h-full">
                    <img 
                        src="./images/cin.webp"
                        alt="Giro in Gondola Venezia"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-16 max-w-[90%] md:max-w-[50%]">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                        Girno di Festa
                    </h2>
                    <p className="text-white text-sm md:text-sm mb-3 md:mb-5">
                        Organizza una festa indimenticabile con il nostro servizio "Festa Privata" a Venezia.
                        Che si tratti di un compleanno, un avversario o qualsiasi altra occasione speciale,...
                    </p>
                    <button className="bg-white text-[#99006e] font-semibold py-3 px-6 md:py-5 md:px-10 rounded-full text-sm md:text-md hover:bg-purple-700">
                        SCOPRI DI PIÙ
                    </button>
                </div>
            </div>
        </div>
    );
}
