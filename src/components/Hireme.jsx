import React from "react";

const Hireme = () => {
  return (
    <section id="education" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">Education</h3>
      </div>

      <div className="relative mt-10 mx-auto max-w-4xl">
        {/* Timeline */}
        <div className="border-l-4 border-cyan-600 absolute left-5 top-0 h-full"></div>

        {/* University */}
        <div className="relative ml-12 mb-10">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold">
              BSc Honours in Information Technology 
            </h4>
            <p className="text-gray-400">University of Kelaniya</p>
            <p className="text-gray-400">2021-2024</p>
          </div>
        </div>

        {/* School */}
        <div className="relative ml-12">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold">Biological Science</h4>
            <p className="text-gray-400">Jaffna Vembadi Girls´High School</p>
            <p className="text-gray-300">
              G.C.E (A/L) Examination with A & B & C
            </p>
            <p className="text-gray-400">2010-2018</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
