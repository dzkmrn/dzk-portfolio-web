import React, { useEffect, useState } from "react";
import Section from "../components/layouts/Section";
import Portfolio from "../components/portfolio/Portfolio";
import PortfolioDetail from "../components/portfolio/PortfolioDetail";
import MetaSeo from "../components/MetaSeo";
import http from "../utilities/http";
import constant from "../utilities/constant";
import { useRouter } from "next/router";

export default function Portofolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [singleData, setSingleData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/dzkporto');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPortfolios(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleOpenModal = (value) => {
    setSingleData(value);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  const nextData = () => {
    const index = portfolios.findIndex((value) => value._id === singleData._id);
    if (index + 1 < portfolios.length) {
      setSingleData(portfolios[index + 1]);
    }
  };

  const prevData = () => {
    const index = portfolios.findIndex((value) => value._id === singleData._id);
    if (index - 1 >= 0) {
      setSingleData(portfolios[index - 1]);
    }
  };

  return (
    <Section
      title="Portfolio"
      subtitle="Some of my projects this past 2-3 years"
      action={
        <select
          className="text-gray-500 ring-0 dark:border-gray-600 dark:bg-black dark:text-white outline-none cursor-pointer border w-full lg:w-52 py-3 px-5 border-dashed rounded-sm"
          onChange={(e) => {
            const value = e.target.value;
            if (value !== "all") {
              router.push(`/portfolio?filter=${encodeURIComponent(value)}`);
            } else {
              router.push("/portfolio");
            }
          }}
          value={router.query.filter || "all"}
        >
          <option value="all">Everything</option>
          <option value="Mobile Application">Mobile Application</option>
          <option value="Web Application">Web Application</option>
          <option value="Web Design">Web Design</option>
        </select>
      }
    >
      <MetaSeo
        title="Portfolio - Dzaka"
        description={
          "Some of my projects this past 2-3 years."
        }
      />
    <div 
        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        data-aos="fade-up"
      >
        {portfolios.map((value) => {
          const imageUrl = value.img;
          console.log("Image URL:", imageUrl); // Log the image URL to check if it's correct
          return (
            <Portfolio
              key={value._id}
              img={imageUrl}
              title={value.title}
              category={value.category}
              onClick={() => handleOpenModal(value)}
            />
          );
        })}
      </div>
      <PortfolioDetail
        isOpen={isOpen}
        onClose={handleCloseModal}
        data={singleData}
      >
        {isOpen && (
          <>
            <button
              onClick={prevData}
              className="fixed ml-5 left-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextData}
              className="fixed mr-5 right-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}
      </PortfolioDetail>
    </Section>
  );
}


