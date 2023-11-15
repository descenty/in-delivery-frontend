import Catalog from "@/components/catalog/catalog";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-[90%] max-w-[1200px] gap-10 pt-10">
      <h1 className="text-2xl font-semibold">Каталог</h1>
      <Catalog />
    </main>
  );
}
