import CompaniesHeader from "./components/companies-header";
import { ListCompanies } from "./components/list-companies";

export default function page() {
  return (
    <div className="">
      <CompaniesHeader />
      <ListCompanies />
    </div>
  );
}
