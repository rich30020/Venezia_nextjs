export default function Banner() {
    return (
        <div className="relative flex items-center justify-start h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden">
            
            <img 
                src="https://i.redd.it/r6fmltasj5091.jpg"
                alt="Immagine con una community di alcolisti"
                className="absolute top-0 left-0 w-full h-full object-cover" 
            />
            
            <div className="relative z-10 px-6 sm:px-12 md:px-24 flex flex-col justify-start mt-16 sm:mt-24 md:mt-32">
                <h2 className="font-roboto font-bold text-xl sm:text-2xl md:text-3xl text-left text-white">
                    Escursioni Giornaliere a Venezia
                </h2>
                <p className="max-w-xs my-2 sm:my-3 md:my-4 text-sm sm:text-lg leading-5 tracking-tight text-left text-white">
                    Un incanto sospeso nell'acqua
                </p>
            </div>
        </div>
    )
}
