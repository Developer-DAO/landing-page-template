import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import {
  FaRocket,
  FaLightbulb,
  FaChartLine,
  FaStar,
  FaQuestionCircle,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  const { t } = useTranslation("common");

  const heroSection = (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/simple-space-backgorund.jpeg"
        alt="Hero background"
        fill
        className="object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 shadow-lg">
          {t("heroHeadline")}
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          {t("heroSubheadline")}
        </p>
        <Link
          href="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-lg transition duration-300 hover-pulse-glow"
        >
          {t("ctaPrimaryButton")}
        </Link>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Head>
        <title>{t("siteTitle")}</title>
        <meta name="description" content={t("siteDescription") || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      {heroSection}

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
              {t("featuresTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t("featuresSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <FaRocket className="text-3xl text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("feature1Title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("feature1Description")}
              </p>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold"
                >
                  {t("learnMore")}
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <FaLightbulb className="text-3xl text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("feature2Title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("feature2Description")}
              </p>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold"
                >
                  {t("learnMore")}
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <FaChartLine className="text-3xl text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("feature3Title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("feature3Description")}
              </p>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold"
                >
                  {t("learnMore")}
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                {t("showcaseTitle")}
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                {t("showcaseDescription")}
              </p>
              <ul className="space-y-3 md:space-y-4">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span>{t(`showcasePoint${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gray-200 rounded-lg aspect-video w-full">
                {/* Placeholder for product image/video */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logo Carousel */}
      <section className="py-12 md:py-20 bg-black w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              {t("trustedByTitle")}
            </h2>
            <p className="text-gray-400">{t("trustedByDescription")}</p>
          </div>

          <div className="max-w-6xl mx-auto overflow-hidden">
            <Slider
              dots={false}
              infinite={true}
              speed={3000}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={0}
              cssEase="linear"
              pauseOnHover={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 2,
                  },
                },
              ]}
              className="overflow-hidden"
            >
              {[
                "/images/partners/partner1.png",
                "/images/partners/partner1.png",
                "/images/partners/partner1.png",
                "/images/partners/partner1.png",
                "/images/partners/partner1.png",
                "/images/partners/partner1.png",
                "/images/partners/partner1.png",
                "/images/partners/partner1.png",
              ].map((imageUrl, index) => (
                <div key={index} className="px-8">
                  <div className="h-16 flex items-center justify-center">
                    <Image
                      src={imageUrl}
                      alt={`Partner ${index + 1}`}
                      width={60}
                      height={60}
                      className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              {t("testimonialsTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t("testimonialsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{t(`testimonial${i}Text`)}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                    {/* Placeholder for testimonial avatar */}
                  </div>
                  <div>
                    <div className="font-semibold">
                      {t(`testimonial${i}Name`)}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {t(`testimonial${i}Title`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("ctaDescription")}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/signup"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition duration-300"
            >
              {t("ctaPrimaryButton")}
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              {t("ctaSecondaryButton")}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                {t("faqTitle")}
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                {t("faqSubtitle")}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="mb-6">
                  <div className="flex items-center bg-white p-6 rounded-xl shadow-md">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {t(`faq${i}Question`)}
                      </h3>
                      <p className="text-gray-600">{t(`faq${i}Answer`)}</p>
                    </div>
                    <FaQuestionCircle className="text-2xl text-yellow-400 ml-4 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">
              {t("newsletterTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              {t("newsletterDescription")}
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder={t("emailPlaceholder") || ""}
                className="px-6 py-3 rounded-full text-gray-800 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                {t("subscribe")}
              </button>
            </form>
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
