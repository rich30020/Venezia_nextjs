export default function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between p-3 m-3 bg-white rounded-lg md:p-4">
            <img 
                src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Flogo.png&w=3840&q=100"
                className="w-10 h-auto"
            />
            <div className="hidden md:flex flex-row space-x-6">
                <h2 className="text-sm text-pink-700 font-bold">Home Page</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">Escursioni Giornaliere</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">Servizi Professionali</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">Chi Siamo</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">La Flotta</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">News</h2>
            </div>
            <div className="md:hidden">
                <button className="text-pink-700 text-xl">☰</button>
            </div>
        </div>
    );
}
