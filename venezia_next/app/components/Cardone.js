export default function Cardone() {
    return (
        <div className="w-full bg-white rounded-3xl shadow-3xl overflow-hidden relative">
            <div className="w-full h-64 md:h-full">
                <img 
                    src="https://cdn-imgix.headout.com/media/images/c5071d751afe1a787faa2df55605700b-This%20is%20a%20Photograph%20of%20Venice.jpg?auto=format&w=2560&h=1440&q=90&fit=crop&ar=16%3A9&crop=faces"
                    alt="Traghetto Venezia Easy"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-16 max-w-[90%] md:max-w-[50%]">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                    Matrimonio a Bordo
                </h2>
                <p className="text-white text-sm md:text-lg mb-3 md:mb-5">
                    Scopri il fascino di Venezia in un modo unico e romantico con il nostro servizio "Matrimonio a Bordo". 
                    Immagina di dire "Si" circondato dalle incantevoli acque della Serenissima.
                </p>
                <button className="bg-white text-[#99006e] font-semibold py-3 px-6 md:py-5 md:px-10 rounded-full text-sm md:text-xl hover:bg-purple-700">
                    SCOPRI DI PIÙ
                </button>
            </div>
        </div>
    );
}
