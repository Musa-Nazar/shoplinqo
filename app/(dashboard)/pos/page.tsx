import PosForm from "@/components/pos/PosForm";
import PosHeaaderSection from "@/components/pos/PosHeaaderSection";
import PosItems from "@/components/pos/PosItems";
import PosNavSection from "@/components/pos/PosNavSection";
import PosSearchSection from "@/components/pos/PosSearchSection";

interface pos {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Pos: React.FC<pos> = async ({ searchParams }) => {
  // GET PAGE TYPE
  const resolveSearchParams = await searchParams;
  const pageType = resolveSearchParams?.type;
  const isByItem = !pageType || pageType === "item";
  const isByAmount = pageType === "amount";

  // XML
  const xml: React.ReactNode = (
    <main className="h-dvh bg-(--special-gray) overflow-auto pb-38 max-w-200 mx-auto">
      <PosHeaaderSection />
      <PosNavSection isByItem={isByItem} isByAmount={isByAmount} />

      {/* BY ITEM CONTENT */}
      {isByItem && (
        <>
          <PosSearchSection />
          <PosItems />
        </>
      )}

      {/* BY AMOUNT CONTENT */}
      {isByAmount && (
        <>
          <PosForm />
        </>
      )}
    </main>
  );
  return xml;
};

export default Pos;
