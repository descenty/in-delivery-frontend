import CompanyCard from "@/components/companies/companyCard";
import CompanyCreateModal from "@/components/companies/companyCreateModal";
import { fetchAPI } from "@/utils/fetchAPI";
import { Button } from "@nextui-org/button";

const Companies = async () => {
  // const companies = await fetchAPI<CompanyDTO[]>("/companies");
  const companies: CompanyDTO[] = [
    {
      id: 217,
      name: "Сбер",
      logo: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
    },
  ];
  return (
    <div className="flex flex-col gap-6 w-full h-full p-6 px-12">
      <h1 className="text-2xl">Компании</h1>
      <div className="flex flex-col gap-3">
        {companies?.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
      <CompanyCreateModal />
    </div>
  );
};

export default Companies;
