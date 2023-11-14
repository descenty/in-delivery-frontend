import Catalog from "@/components/catalog/catalog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full gap-10 p-10 px-28">
      <h1 className="text-2xl font-semibold">Каталог</h1>
      <Catalog />
    </main>
  );
}
