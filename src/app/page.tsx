import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
       
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
          Building is the only Way Ahead
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Become part of a live-project or lead one
          </p>
          <p className="text-lg text-gray-600 mb-8"> Leverage our custom-made teams, distribution channels,
             network and infrastructure to ideate, build and launch your product at lightening fast speed.</p>
          <div className="mb-8">
            <Image
              src="/img1.png" 
              alt="Hero Image"
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </div>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Feature 1
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              posuere, ipsum eu aliquet fringilla.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Feature 2
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              posuere, ipsum eu aliquet fringilla.
            </p>
          </div>
     
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Feature 3
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              posuere, ipsum eu aliquet fringilla.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
