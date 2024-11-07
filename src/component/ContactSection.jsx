const ContactSection = () => {
  return (
    <div className="w-full py-16 px-4 flex justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 items-center  rounded-lg overflow-hidden">
        
        {/* Kolom Kiri - Pesan Sambutan dengan Lingkaran di Belakang */}
        <div className="relative p-8 text-center flex items-center justify-center bg-opacity-50">
          
          {/* Lingkaran Transparan di Latar Belakang Konten Pesan Sambutan */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-80 h-80 bg-[#DCE8F3] md:bg-opacity-50 bg-opacity-0 rounded-full"></div>
          </div>

          {/* Konten Pesan Sambutan */}
          <div className="relative bg-border bg-opacity-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-border pb-2">
              Jangan Ragu untuk Menghubungi Kami!
            </h3>
            <p className="text-gray-700  border-border border-t-10">
              Kami siap membantu Anda dengan segala kebutuhan dan pertanyaan.
            </p>
          </div>
        </div>

        {/* Kolom Kanan - Formulir Kontak */}
        <div className="bg-white p-8 flex flex-col justify-center">
          <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Kirim Pesan</h4>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold text-left">Nama</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-800"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold text-left">Alamat E-mail</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-800"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold text-left">Pesan</label>
              <textarea
                className="w-full mt-1 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-800"
                placeholder="Tulis pesan Anda di sini"
                rows="4"
              ></textarea>
              <p className="font-light text-left text-[16px] text-[#999494]">Kami siap membantu Anda dengan segala kebutuhan dan pertanyaan. </p>
            </div>
            <button
              type="submit"
              className="btn w-full bg-button text-white font-bold py-2 rounded-md hover:bg-iconig focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
