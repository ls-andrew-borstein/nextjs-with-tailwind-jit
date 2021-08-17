import { NextPage } from "next";
import Image from "next/image";
import { Page } from "shared/components";

import profilePic from "../../public/images/me.jpg";

const Me: NextPage = () => {
  return (
    <Page title="Me">
      <figure className="mt-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0 overflow-hidden">
        <div className="w-32 h-32 md:w-96 md:h-auto rounded-full md:rounded-none mx-auto relative overflow-hidden">
          <Image
            alt="Andrew"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            src={profilePic}
          />
        </div>
        <div className="pt-6 md:p-8 space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              “Tailwind CSS is the only framework that I have seen scale on
              large teams. It’s easy to customize, adapts to any design, and the
              build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">Andrew Borstein</div>
            <div className="text-gray-500">Software Engineer, Lightspeed</div>
          </figcaption>
        </div>
      </figure>
    </Page>
  );
};

export default Me;
