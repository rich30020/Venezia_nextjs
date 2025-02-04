export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="flex justify-center py-4">
                <img 
                    src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Flogo.png&w=3840&q=100" 
                    className="w-16 h-16" 
                    alt="Logo Il Doge di Venezia"
                />
            </div>

            <div className="container mx-auto px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-600">

                <div className="flex flex-col items-center text-center">
                    <h3 className="text-sm font-semibold text-[#99006e] mb-2">Il Doge di Venezia</h3>
                    <p>Via Treportina, 30 I-30013 Cavallino</p>
                    <p>Treporti, Venezia</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h3 className="text-sm font-semibold text-[#99006e] mb-2">Contatti gruppi</h3>
                    <p>Tel: +39 041 530 23 63</p>
                    <p>Fax: +39 041 530 40 16</p>
                    <p>E-Mail: info@dogedivenezia.it</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h3 className="text-sm font-semibold text-[#99006e] mb-2">Contatti Individuali / Escursioni</h3>
                    <p>Tel: +39 041 315 63 02</p>
                    <p>E-Mail: api@dogedivenezia.it</p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                    <div>
                        <h3 className="text-sm font-semibold text-[#99006e] mb-2">Follow us</h3>
                        <div className="flex gap-2">
                            <img src="/images/facebook.png" className="w-6 h-6" />
                            <img src="/images/instagram.png" className="w-6 h-6" />
                            <img src="/images/twitter.png" className="w-6 h-6" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-[#99006e] mb-2">I nostri metodi di pagamento</h3>
                        <img 
                            src="https://drindrink.com/wp-content/uploads/2016/11/payment.png" 
                            className="w-44 mx-auto" 
                            alt="Metodi di pagamento"
                        />
                    </div>
                </div>

            </div>

            <div className="w-full bg-[#99006e] text-white text-[10px] py-2 flex flex-col sm:flex-row justify-between px-4 text-center sm:text-left">
                <p>Il Doge di Venezia S.r.l. - P.Iva: IT03515100273 - Rea VE - 315238 Privacy & Cookie policy</p>
                <p className="sm:pr-11">Design & Develop by<strong> <u> Rich Web Developer</u></strong></p>
            </div>
        </footer>
    );
}
