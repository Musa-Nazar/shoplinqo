import InventoryEntries from "@/components/Inventory/InventoryEntries";
import InventoryHeaderSection from "@/components/Inventory/InventoryHeaderSection";
import InventoryOverviewSection from "@/components/Inventory/InventoryOverviewSection";

const Inventory: React.FC = () => {
  const xml: React.ReactNode = (
    <main className="h-dvh overflow-auto hide-scroll bar bg-(--special-gray) pb-38 max-w-200">
      <InventoryHeaderSection />
      <InventoryOverviewSection />
      <InventoryEntries />
    </main>
  );
  return xml;
};

export default Inventory;
