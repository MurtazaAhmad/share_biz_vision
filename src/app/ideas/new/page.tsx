import React from "react";

const NewIdea = () => {
  return (
    <div className="bg-gray-800 flex bg-local">
      <div className="bg-white mx-auto max-w-6xl my-8 py-16 px-12 lg:px-24 shadow-xl mb-24">
        <h2 className="mb-4 font-semibold font-sans">
          Share your business Idea with rest of the World, and have discussions
          with like minded people!
        </h2>
        <form className="mt-2">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Idea Title*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1"
                  type="text"
                  placeholder="Business Idea Title"
                />
                <div>
                  <span className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </span>
                </div>
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Description*
                </label>
                <textarea
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1"
                  placeholder="Describe your idea in detail"
                />
                <div>
                  <span className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </span>
                </div>
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  About*
                </label>
                <div>
                  <select
                    className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-1 rounded"
                    id="location">
                    <option>Software Industry</option>
                    <option>Crypto</option>
                    <option>Stocks</option>
                  </select>
                  <div>
                    <span className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                  Button
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewIdea;
