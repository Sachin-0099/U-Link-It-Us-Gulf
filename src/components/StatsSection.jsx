import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    setStartCounting(true);
  }, []);

  return (
    <section 
      className="py-16 bg-white w-full" 
      aria-label="Company Statistics Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          Our Achievements in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          
          <article className="stat-item" aria-label="Years of Experience">
            <h3 className="text-4xl md:text-5xl font-bold text-[#b73235] mb-2">
              {startCounting && <CountUp end={15} duration={2} suffix="+" />}
            </h3>
            <p className="text-gray-700 text-lg">Years of Experience</p>
          </article>

          <article className="stat-item" aria-label="Clients Served">
            <h3 className="text-4xl md:text-5xl font-bold text-[#b73235] mb-2">
              {startCounting && <CountUp end={500} duration={2} suffix="+" />}
            </h3>
            <p className="text-gray-700 text-lg">Clients Served</p>
          </article>

          <article className="stat-item" aria-label="Successful Projects">
            <h3 className="text-4xl md:text-5xl font-bold text-[#b73235] mb-2">
              {startCounting && <CountUp end={40} duration={2} suffix="+" />}
            </h3>
            <p className="text-gray-700 text-lg">Successful Projects</p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
