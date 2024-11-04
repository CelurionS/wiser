import gambar from '../assets/gambar.jpg';

const Homepage = () => {
    return (
        <div className="container mx-auto px-4 mt-12">
            {/* Teks 1 dan Gambar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="p-3 text-left">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4 font-raleway">WISER</h2>
                        <p className="text-gray-600 mb-6 max-w-md text-justify font-raleway">
                            WISER adalah aplikasi inovatif yang dirancang untuk memudahkan para peternak dalam
                            memulai dan mengelola budidaya sarang burung walet. WISER merupakan kependekan dari
                            Walet Integrated Sustainable Ecosystem, yang menawarkan berbagai fitur untuk
                            meningkatkan efisiensi dan efektivitas dalam menjalankan usaha budidaya.
                        </p>
                        <div className="mt-6">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                                Hubungi Kami
                            </button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md ml-4">
                                Daftar Aplikasi
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img 
                        src={gambar} 
                        alt="Deskripsi Gambar" 
                        className="w-full max-w-md h-auto rounded-md shadow-md"
                    />
                </div>
            </div>

            {/* Teks 2 dan Gambar */}
            <div className="container mx-auto px-4 py-12 bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                        <img
                            src={gambar}
                            alt="Gambar burung walet"
                            className="w-full max-w-md h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center p-3">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4-w-md font-raleway text-left">
                            Apa itu Budidaya Sarang Burung Walet?
                        </h2>
                        <p className="text-gray-600 mb-4 max-w-md text-justify font-raleway">
                            Budidaya sarang burung walet adalah praktik pemeliharaan burung walet,
                            khususnya dari jenis Collocalia atau Aerodramus, untuk menghasilkan
                            sarangnya yang terbuat dari air liur dan memiliki nilai ekonomi tinggi di
                            Asia. Lokasi ideal untuk budidaya ini adalah daerah beriklim hangat dan
                            lembab. Sarang walet bernilai tinggi di pasar internasional, tetapi
                            budidaya ini juga menghadapi tantangan seperti penyakit, predator, dan
                            fluktuasi harga. Keberhasilan budidaya memerlukan pengetahuan dan
                            keterampilan khusus.
                        </p>
                    </div>
                </div>
            </div>

            {/* Teks 3 dan Gambar */}
            <div className="container mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="p-3 text-left">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-raleway">Kelola Hasil Produksi Waletmu dengan Aplikasi WISER</h2>
                            <p className="text-gray-600 mb-6 max-w-md text-justify font-raleway">
                                Wiser adalah aplikasi digital yang dirancang khusus untuk membantu petani burung walet dalam mengelola, belajar, dan berkonsultasi terkait budidaya sarang burung walet. Aplikasi ini menawarkan berbagai fitur yang memudahkan pengguna untuk memantau lingkungan rumah waletnya sehingga mendukung kondisi ideal bagi burung walet untuk bersarang.
                            </p>
                            <div className="mt-6">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                                    Daftar Aplikasi
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img 
                            src={gambar} 
                            alt="Gambar burung walet" 
                            className="w-full max-w-md h-auto rounded-md shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
