import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { fetchhowDidTheyGetThere } from "../API/calls";

const DiscoverySource = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortType, setSortType] = useState("alphabetically");

  useEffect(() => {
    axios.get("https://kriyabackend.psgtech.ac.in/api/statistics/howdidtheeygethere")
      .then(response => {
        console.log("API Response:", response.data); // Debugging

        const fetchedData = response.data?.data || []; // Ensure `data` exists and is an array
        if (!Array.isArray(fetchedData)) {
          console.error("Expected an array but got", fetchedData);
          setData([]);
          setSortedData([]);
        } else {
          setData(fetchedData);
          // Default sorting by alphabetically when data is fetched
          setSortedData([...fetchedData].sort((a, b) => a._id.localeCompare(b._id)));
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setData([]);
        setSortedData([]);
      });
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    if (type === "alphabetically") {
      setSortedData([...data].sort((a, b) => a._id.localeCompare(b._id)));
    } else {
      setSortedData([...data].sort((a, b) => b.count - a.count));
    }
  };

  return (
    <Layout title={"Source of Information"}>
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 w-full justify-around items-center pb-12">
        <div>Sort by</div>
        <button
          className={`px-6 py-2 rounded-full ${sortType === "alphabetically" ? "bg-[#3c3c3c] text-white" : "bg-[#eaeaea] text-[#303030]"} border-2 border-[#303030]`}
          onClick={() => handleSort("alphabetically")}
        >
          Alphabetically
        </button>
        <button
          className={`px-6 py-2 rounded-full ${sortType === "registrations" ? "bg-[#3c3c3c] text-white" : "bg-[#eaeaea] text-[#303030]"} border-2 border-[#303030]`}
          onClick={() => handleSort("registrations")}
        >
          Registrations
        </button>
      </div>
      <div className="space-y-4 px-4 lg:px-0">
        {sortedData.map((c, index) => (
          <div key={index}>
            <div className="flex items-center">
              <div className="text-xl mr-6 lg:mr-4 w-[5%]">{index + 1}</div>
              <div className="w-3/4">
                <p>{c._id || "Unknown Source"}</p>
              </div>
              <div className="text-3xl lg:text-4xl text-right font-semibold w-[15%]">{c.count}</div>
            </div>
            <div className="w-full h-[1px] bg-gray-500 my-2"></div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DiscoverySource;
