import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef();

  // Trigger animation only when in viewport (SEO + perf friendly)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={statsRef}
      className="py-16 bg-white w-full"
      aria-label={t("Company Statistics Section")}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          {t("Our Achievements in Numbers")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10" role="list">
          <article className="stat-item" role="listitem" aria-label={t("Years of Experience")}>
            <h3 className="text-4xl md:text-5xl font-bold text-[#b73235] mb-2">
              {startCounting && <CountUp end={15} duration={2} suffix="+" />}
            </h3>
            <p className="text-gray-700 text-lg">{t("Years of Experience")}</p>
          </article>

          <article className="stat-item" role="listitem" aria-label={t("Clients Served")}>
            <h3 className="text-4xl md:text-5xl font-bold text-[#b73235] mb-2">
              {startCounting && <CountUp end={500} duration={2} suffix="+" />}
            </h3>
            <p className="text-gray-700 text-lg">{t("Clients Served")}</p>
          </article>

          <article className="stat-item" role="listitem" aria-label={t("Successful Projects")}>
            <h3 className="text-4xl md:text-5xl font-bold text-[#b73235] mb-2">
              {startCounting && <CountUp end={40} duration={2} suffix="+" />}
            </h3>
            <p className="text-gray-700 text-lg">{t("Successful Projects")}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
