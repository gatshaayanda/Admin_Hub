import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";

export default function Page() {
  return (
    <section >
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/Logov3.png"
          alt="Profile photo"
          className=" block  p-1 hover:grayscale lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale"
                        // "     ^bg-gray-100                                                                   ^grayscale" 
          unoptimized
          width={200}
          height={200}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        A government organization endorsed Start-Up, based in Africa, Botswana!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          As a business entity operating since 2022, under the regulations of The Companies and Intellectual Property Authority, we've been responsible for the expense management of international income from ICT services provided.
        </p>
        <p>
          Expense management directives were geared towards well informed executive decisions meant to maintain and develop the infastructure conducive to optimal productivity for any remote working independent contractor.
        </p>
        <p>
          To date, since 2022, our books reflect: management of a steadily rising 6-figure revenue stream,
          a temporary employee whose longest stint had been 9 months on fulltime hours and good relations
          with contract vendors, both remote and local. Now, 2024 sees Admin Hub endorsed by the Local Enterprise Authority 
          through a 2 year collaborative, remote meetings, in-person meetings campagin that led to their desire 
          for Admin Hub to be awarded financing by The Youth Grant Fund association.  {" "}
          <Link href="https://drive.google.com/file/d/1ywlV2F8vnfIedIQtg2_Dd5kucRrxBtLZ/view?usp=drive_link"     className=" p-1 bg-blue-100 hover:grayscale rounded-lg"
           >
            click here!
          </Link>{" "}
          for corroborating documentation.
        </p>
      
        <p>
          This web application has been built and maintained by{" "}
          {/* <a href="" target="_blank"> */}
            Ayanda
          {/* </a> */}
          .
        </p>
      </div>
    </section>
  );
}
