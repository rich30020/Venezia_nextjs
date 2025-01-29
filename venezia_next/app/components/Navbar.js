export default function Navbar() {
    return (
        <div className="flex flex-row items-center p-1 m-3 space-y-2 bg-white rounded-lg 
        md:space-y-0 md:space-x-10 md:md-0 md:p-4 h-10">
            <img 
                src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Flogo.png&w=3840&q=100"
                className="w-10 h-auto">
            </img>
            
            <div className="flex-1"></div>
            
            <div className="flex flex-row space-x-8">
                <h2 className="text-sm text-pink-700 font-bold">Home Page</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">Escursioni Giornaliere</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">Servizi Professionali</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">Chi Siamo</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">La Flotta</h2>
                <h2 className="text-sm hover:text-pink-700 hover:font-bold">News</h2>
            </div>
        </div>
    );
};
