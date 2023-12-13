
const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Welcome to Iphone11x</h1>
        <p>Discover the amazing features of our latest Iphone11x</p>
      </header>
      <main className="flex-1 flex justify-between items-center mx-auto max-w-4xl p-8">
        <section className="phone-details w-1/2">
          <h2 className="text-2xl font-bold mb-4">Introducing PhoneX</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan odio ac justo
            viverra, ut aliquet felis facilisis.
          </p>
          <ul className="mb-4">
            <li>6.5" Super Retina XDR display</li>
            <li>Triple-camera system</li>
            <li>A14 Bionic chip</li>
            <li>Water and dust resistance</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </section>
        <section className="phone-image w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_640.png"
            alt="PhoneX"
            className="rounded-lg shadow-xl border border-gray-200"
          />
        </section>
      </main>
      
    </div>
  );
};

export default LandingPage;
