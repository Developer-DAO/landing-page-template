import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import { FaFlag, FaLightbulb, FaRocket } from "react-icons/fa";

export default function About() {
  const { t } = useTranslation("common");

  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: t("roadmapQ1Title"),
      description: t("roadmapQ1Description"),
      status: "completed",
    },
    {
      quarter: "Q2 2025",
      title: t("roadmapQ2Title"),
      description: t("roadmapQ2Description"),
      status: "in-progress",
    },
    {
      quarter: "Q3 2025",
      title: t("roadmapQ3Title"),
      description: t("roadmapQ3Description"),
      status: "planned",
    },
    {
      quarter: "Q4 2025",
      title: t("roadmapQ4Title"),
      description: t("roadmapQ4Description"),
      status: "planned",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t("aboutPageTitle") || ""}</title>
        <meta name="description" content={t("aboutPageDescription") || ""} />
      </Head>

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("aboutHeroTitle")}
            </h1>
            <p className="text-xl text-gray-300">{t("aboutHeroDescription")}</p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("productOverviewTitle")}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t("productOverviewDescription")}
              </p>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1">
                      <FaLightbulb className="text-yellow-400 text-xl" />
                    </div>
                    <p className="text-gray-700">{t(`productPoint${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg h-[400px] w-full">
                {/* Product image placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {t("originStoryTitle")}
            </h2>
            <div className="prose prose-lg mx-auto">
              <p>{t("originStoryParagraph1")}</p>
              <p>{t("originStoryParagraph2")}</p>
              <p>{t("originStoryParagraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the Future - Moved here */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("visionTitle")}
            </h2>
            <p className="text-xl mb-8">{t("visionDescription")}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6">
                  <FaFlag className="text-yellow-400 text-3xl mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">
                    {t(`visionPoint${i}Title`)}
                  </h3>
                  <p className="text-gray-400">
                    {t(`visionPoint${i}Description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t("roadmapTitle")}
          </h2>
          <div className="max-w-4xl mx-auto">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 mb-12 relative"
              >
                {index !== roadmapItems.length - 1 && (
                  <div className="absolute left-4 md:left-[7.5rem] top-16 bottom-0 w-px bg-gray-200" />
                )}
                <div className="md:w-60 flex-shrink-0">
                  <div
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold
                    ${
                      item.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "in-progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.quarter}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
