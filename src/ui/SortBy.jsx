import { useSearchParams } from "react-router";
import Select from "./Select";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  const handleChange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
};

export default SortBy;
