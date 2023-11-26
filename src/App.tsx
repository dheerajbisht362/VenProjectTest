import FeatureSection from "./component/FeatureSection";
import RightSection from "./component/RightSection";
import SectionAdd from "./component/SectionAdd";
import { useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [components, setComponents] = useState([
    {
      imgSrc:
        "https://img.freepik.com/premium-vector/home-icon-house-symbol-simple-vector-design-logo_231786-5048.jpg?w=2000",
      headingText: "Dubai, United Arab Emirates",
      subText: "A mature real estate market with a high return on investment",
    },
    {
      imgSrc:
        "data:image/png;base64,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",
      headingText: "Rented",
      subText: "Currently occupied and professionally managed by our team",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fxq7ygMAGyjIzKAcRZKc-A6inI27V6Y__g&usqp=CAU",
      headingText: "1 year rendtal guarantee",
      subText:
        "VenQ guarantees you at least 1year of rental income on this property",
    },
  ]);

  function handleIsAdminChange() {
    setIsAdmin(!isAdmin);
  }

  function handleButtonClick() {
    setComponents((prevComponents) => [
      ...prevComponents,
      {
        imgSrc: "https://www.svgrepo.com/show/7894/currencies.svg",
        headingText: " Enter Heading Text",
        subText: " Enter Sub Heading",
      },
    ]);
  }
  return (
    <>
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isAdmin}
            className="sr-only peer"
            onChange={handleIsAdminChange}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Admin
          </span>
        </label>
      </div>
      {isAdmin && (
        <div>
          <button
            className="w-auto inline-block bg-blue-200 p-2 rounded-lg"
            onClick={handleButtonClick}
            >
            ADD BUTTON
          </button>
          
        </div>
      )}
      <div className="flex gap-4 bg-gray-100 justify-center ">
        <div className="bg-white  mt-2 rounded-2xl px-2">
          <FeatureSection isAdmin={isAdmin} />
          {components.map((component, index) => (
            <div key={index}>
              <SectionAdd
                isAdmin={isAdmin}
                imgSrc={component.imgSrc}
                headingText={component.headingText}
                subText={component.subText}
              />
            </div>
          ))}
        </div>
        <div className=" mt-2">
          <div className="bg-white rounded-2xl">
            <RightSection isAdmin={isAdmin} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
