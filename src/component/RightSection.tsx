function RightSection({ isAdmin}: {isAdmin:boolean}) {
  return (
    <>
      <div className="p-4 m-auto rounded-2xl">
        <div>
          <div className="heading text-xl  mt-2 mb-2 text-center">
            Property price
          </div>
          <div className="text-xl text-blue-600  text-center">
            RUP <span className="text-3xl">2,059,765</span>
          </div>
          {/* slider */}
          <div className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-4">
            <div className="w-9/12 h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer"></div>
          </div>
          {/* funded and investor section */}
          <div className="my-2 text-gray-700">
            <div className="mt-1">
              75% funded
              <div className="float-right">RUP 4,25,165 available</div>
            </div>
          </div>
          <div className="my-3">
            <div className=" text-gray-700 text-lg">
              <span className="text-blue-600 font-semibold text-lg"> 493</span>{" "}
              investors
              <div className="float-right text-red-600 font-semibold ">
                <img
                  className="w-4 mx-1 inline"
                  src="data:image/png;base64,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"
                />
                56 days left
              </div>
            </div>
          </div>
        </div>
        {/* return details section */}
        <div className="bg-gray-100  py-1 px-3 rounded-lg font-medium">
          <div className="my-3">
            Annualosed return{" "}
            <div className="float-right" contentEditable={isAdmin}>
              {" "}
              10%
            </div>
          </div>
          <div className="my-3">
            Annual appreciation{" "}
            <div className="float-right" contentEditable={isAdmin}>
              {" "}
              6%
            </div>
          </div>
          <div className="my-3">
            Project gross yield{" "}
            <div className="float-right" contentEditable={isAdmin}>
              {" "}
              8.38%
            </div>
          </div>
          <div className="my-3">
            Projected net yield
            <div className="float-right" contentEditable={isAdmin}>
              {" "}
              6.59%
            </div>
          </div>
        </div>

        {/* input */}
        <div className="flex my-4 gap-2">
          <input className="rounded-xl p-2 border-2" value="2000" />
          <button className="p-2 bg-blue-600 text-white rounded-xl">Add to cart</button>
        </div>
        <div className="flex gap-3">
          <div className="bg-blue-200 rounded-lg p-2 text-sm">+ RUP 2000</div>
          <div className="bg-blue-200 rounded-lg p-2 text-sm">+ RUP 5000</div>
          <div className="bg-blue-200 rounded-lg p-2 text-sm">+ RUP 10000</div>
        </div>
        <div className="m-auto my-4">You won't be charged yet</div>
      </div>
    </>
  );
}

export default RightSection;
