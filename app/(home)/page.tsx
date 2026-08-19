import SignupForm from "@/components/signup/SignupForm";
import ScreenScale from "@/components/utils/ScreenScale";

const Home: React.FC = () => {
  const xml: React.ReactNode = (
    <main className="flex justify-center items-center min-h-dvh overflow-auto py-4">
      <ScreenScale type="div" className="max-w-[84%]!">
        <SignupForm />
      </ScreenScale>
    </main>
  );
  return xml;
};

export default Home;
