export default function Banner() {
    return (
        <div className="relative flex items-center justify-start h-96 w-full rounded-l-xl overflow-hidden">
            
            <img 
                src="https://i.redd.it/a8pfjbjn15o51.jpg"
                alt="Immagine con una community di alcolisti"
                className="absolute top-0 left-0 w-full h-full object-cover" 
            />
            
            <div className="relative z-10 p-24 flex flex-col justify-start mt-32">
                <h2 className="font-roboto font-bold text-3xl text-left text-white">
                    Escursioni Giornaliere a Venezia
                </h2>
                <p className="max-w-xs my-4 text-lg leading-5 tracking-tight text-left text-white">
                    Un incanto sospeso nell'acqua
                </p>
            </div>
        </div>
    )
}
