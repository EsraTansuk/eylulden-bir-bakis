import { PageContainer } from "@/components/pageContainer/PageContainer";
import { StickySideMenu } from "@/components/stickySideMenu/StickySideMenu";
import { Title } from "@/components/title";
import React from "react";

export const AboutMe = () => {
  return (
    <PageContainer>
      <div className=" flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-4/6">
          <Title title="About Me" />
          <img
            src="https://soledad.pencidesign.net/wp-content/uploads/2015/10/about-footer.jpg"
            alt="About Me Fotoğrafı"
            className="w-full   shadow mb-6 mx-auto"
          />
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents. I should be incapable of
            drawing a single stroke at the present moment.
            <br />
            <br />
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-500 mb-6">
            <span className="block mb-2">
              “Life is a series of natural and spontaneous changes. Don&apos;t
              resist them – that only creates sorrow. Let reality be reality.
              Let things flow naturally forward in whatever way they like.”
            </span>
            <span className="text-primary font-semibold">LAO TZU</span>
          </blockquote>

          <h3 className="text-xl font-bold mt-8 mb-4">
            LOVE WHAT YOU DO. DO WHAT YOU LOVE
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>In enim justo, rhoncus ut,</li>
            <li>Curabitur ullamcorper ultricies</li>
            <li>Donec vitae sapien ut lorem</li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed">
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
            eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna.
          </p>
        </div>
        <div className="w-full lg:w-2/6">
          <StickySideMenu />
        </div>
      </div>
    </PageContainer>
  );
};
