import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search"
        className="input input-bordered rounded-full mt-4"
      />
      <button
        type="submit"
        className="btn btn-circle mt-4 bg-sky-500 text-white"
      >
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;