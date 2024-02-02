import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <section className="text-center py-[60px]">
      <div className="w-[60%] mx-auto leading-relaxed">
        <h2 className="font-grotesk font-semibold">
          <strong className="text-purple">237 Logos</strong>, an open source
          collection of high quality, optimised logos of Cameroonian{" "}
        </h2>

        <h4 className="my-4">
          Search and download logos in <strong>PNG</strong> and{" "}
          <strong>SVG</strong> formats
        </h4>
        <div className=" ">
          <Button size="lg">Contribute on Github</Button>
        </div>
      </div>
    </section>
  );
}

export default Header;
