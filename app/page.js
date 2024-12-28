import Image from "next/image";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Home from "./Components/Home";

config.autoAddCss = false; //disable the automatic addition of css

export default function Page() {
  return (
    <>
      <div className="h-screen text-gray-700">
          <Home/>
      </div>
    </>
  );
}
