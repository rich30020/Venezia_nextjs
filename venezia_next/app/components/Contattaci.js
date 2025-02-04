export default function Contattaci() {
    return (
        <div className="w-full p-6 md:p-12 rounded-2xl shadow-lg mt-10 border border-white max-h-[550px] flex items-center justify-center min-h-screen bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                
                <div>
                    <h2 className="text-2xl font-bold text-[#99006e] text-center md:text-left">Contattaci</h2>
                    <p className="text-gray-600 mt-2 text-center md:text-left">
                        Scrivici per problemi con la prenotazione o se vuoi chiederci maggiori informazioni riguardo i tour.
                    </p>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-[#99006e] text-center md:text-left">Contatti gruppi</h3>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <div className="w-full sm:w-1/2 bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center border border-gray-200">
                                <img src="/images/mobile.png" className="w-10 h-10 mb-2" />
                                <p className="text-sm text-gray-600 text-center">+39 041 530 23 63</p>  
                            </div>
                            <div className="w-full sm:w-1/2 bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center border border-gray-200">
                                <img src="/images/email.png" className="w-10 h-10 mb-2" />
                                <p className="text-sm text-gray-600 text-center">info@dogedivenezia.it</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mt-4 text-[#99006e] text-center md:text-left">Contatti Individuali / Escursioni</h3>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <div className="w-full sm:w-1/2 bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center border border-gray-200">
                                <img src="/images/mobile.png" className="w-10 h-10 mb-2" />
                                <p className="text-sm text-gray-600 text-center">+39 041 315 63 02</p>
                            </div>
                            <div className="w-full sm:w-1/2 bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center border border-gray-200">
                                <img src="/images/email.png" className="w-10 h-10 mb-2" />
                                <p className="text-sm text-gray-600 text-center">api@dogedivenezia.it</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-64 md:h-auto">
                    <iframe
                        className="w-full h-full rounded-2xl shadow-xl border border-gray-200"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179279.59787562274!2d12.222530590247118!3d45.40442475473129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sVenezia%20VE!5e0!3m2!1sit!2sit!4v1738659717970!5m2!1sit!2sit"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                
            </div>
        </div>
    );
}
