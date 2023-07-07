import BaseHeader from "~/components/BaseHeader";
import MainContainer from "~/components/MainContainer";
import FeedComponent from "~/components/FeedComponent";
import { demo } from "~/data/test-data";
import Image from "next/image";
import Link from "next/link";

const SignUpButton = () => {
  return (
    <button
      style={{
        display: "flex",
        padding: "12px",
        border: "none",
        borderRadius: "24px",
        backgroundColor: "#fff",
        color: "#888",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Join Waitlist
    </button>
  );
};

export default function Home() {
  return (
    <main className="">
      <BaseHeader>
        <SignUpButton />
      </BaseHeader>
      <MainContainer>
        <div className="flex justify-center gap-4 pt-4">
          <div className="w-3/5 justify-end p-6 ">
            <div
              className="p-4 text-4xl text-white"
              style={{
                fontFamily: "Ysabeau SC, sans-serif",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              AI does your online shopping for you
            </div>
            <div
              className=" p-4 text-2xl text-tailorTan-300"
              style={{
                textShadow: "0px 0.5px 0.5px rgba(0, 0, 0, 0.5)",
              }}
            >
              A browser extension leveraging img2txt AI to produce detailed
              image descriptions of any reference product. Select the features
              you like and don&apos;t like about the reference product from its
              description. We find products that match your preferences, t
              <span style={{ color: "#bcd4bd" }}>ai</span>lored to you.
            </div>
          </div>
          <Link
            href="https://www.loom.com/share/cf72ee681b5d4b1481385cc425f2cdf7?sid=da5c30c2-a971-4a2e-a515-5178a705ac9d"
            className="relative flex justify-center gap-4"
          >
            <Image
              src="/img/TailorScreenshot_Modal.png"
              alt="Tailor Screenshot"
              width={480}
              height={480}
              className="rounded-xl shadow-2xl"
            />
            <button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white px-6 py-2 text-xl font-bold shadow-2xl"
              style={{ zIndex: 10 }}
            >
              Watch Demo
            </button>
          </Link>
        </div>
        <FeedComponent data={demo} />
      </MainContainer>
    </main>
  );
}
