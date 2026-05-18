import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowItWorks";
import WhySection from "@/components/home/WhySection";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden transition-colors duration-300">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 size-112.5 bg-indigo-500/8 dark:bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="absolute bottom-20 right-10 size-125 bg-purple-500/6 dark:bg-purple-500/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        <Banner />

        <WhySection />

        <HowItWorks />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-size-[16px_28px] mask-[radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none z-0" />
    </div>
  );
};

export default Home;
