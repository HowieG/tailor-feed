import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import BaseHeader from "~/components/BaseHeader";
import MainContainer from "~/components/MainContainer";
import { set, z } from "zod";

const Waitlist: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailor</title>
        <meta name="description" content="Tailor Waitlist" />
        <link rel="icon" href="img/tailor-logo.png" />
      </Head>
      <Hero />
    </>
  );
};

export default Waitlist;

const Hero = () => {
  return (
    <div className="isolate ">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <BaseHeader />
      <MainContainer>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Join Waitlist
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Thanks for your interest! Tailor is under active development.
                  We&apos;ll let you know when it&apos;s ready. 😊
                </p>
                <div className="flex items-center justify-center gap-x-6">
                  <EmailCapture />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </main>
      </MainContainer>
    </div>
  );
};

const EmailCapture = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmitAsync = async (emailValue: string) => {
    const res = await fetch("/api/submitEmail", {
      method: "POST",
      body: JSON.stringify({ email: emailValue }),
    });
    if (res.ok) {
      setIsSuccess(true);
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value;

    if (z.string().email().safeParse(email).success) {
      handleSubmitAsync(email).catch((error) => {
        console.error("Error submitting email:", error);
      });
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="sm:flex">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-tailorTan-300 focus:ring-tailorTan-300 sm:max-w-xs"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0 sm:flex-shrink-0">
          <button
            disabled={isLoading}
            type="submit"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-tailorTan-300 px-5 py-3 text-base font-medium text-white hover:bg-tailorTan-200 focus:outline-none focus:ring-2 focus:ring-tailorTan-300 focus:ring-offset-2"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading
              </div>
            ) : (
              "Join Waitlist"
            )}
          </button>
        </div>
      </div>
      {isSuccess && <div className="mt-4 text-green-500">Joined waitlist!</div>}
      {isError && (
        <div className="mt-4 text-red-500">
          Error joining waitlist. Please check email then try again.
        </div>
      )}
    </form>
  );
};
