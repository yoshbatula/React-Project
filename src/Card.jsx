import logo from './images/Umerch-Logo.png'

export default function Card() {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={logo} alt="Umerch Logo"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Umerch</div>
                <p className="text-gray-700 text-base">
                    Welcome to Umerch, your one-stop shop for all things merchandise! We offer a wide range of high-quality products, from trendy apparel to unique accessories, all designed to help you express your individuality. Whether you're looking for the perfect gift or something special for yourself, Umerch has got you covered. Shop with us today and discover the perfect blend of style and quality!
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Umerch</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Merchandise</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ShopNow</span>
            </div>
        </div>
    );
}