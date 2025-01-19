import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div class="w-full max-w-sm min-w-[200px]">
      <div class="relative">
        <input
          class="w-full bg-transparent placeholder:text-white text-white text-sm border border-slate-200 rounded-md pl-3 pr-11 md:pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-white hover:border-white shadow-sm focus:shadow font-bold "
          placeholder="Search here..."
        />
        <button
          class="absolute top-0 right-0 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none h-full"
          type="button">
          <div className="search_icon_container mr-1 ">
            <FaSearch />
          </div>
          <div className="hidden md:block">Search</div>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
