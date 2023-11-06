import React, { useState, useEffect } from "react";

// Components in reverse order of above

const userDataList = [
  {
    full_name: "Colet Briamo",
    status: "active",
    points: 90,
    gender: "Male",
    mail: "cbriamo0@ucoz.ru",
    mobile_numbers: "595 30 40 59",
    id_number: 11784188,
    address: "7 Banding Court",
    birth_day: "8/20/2004",
  },
  {
    full_name: "Colet Briamo",
    status: "active",
    points: 90,
    gender: "Male",
    mail: "cbriamo0@ucoz.ru",
    mobile_numbers: "595 30 40 59",
    id_number: 11784188,
    address: "7 Banding Court",
    birth_day: "8/20/2004",
  },
  {
    full_name: "Colet Briamo",
    status: "active",
    points: 90,
    gender: "Male",
    mail: "cbriamo0@ucoz.ru",
    mobile_numbers: "595 30 40 59",
    id_number: 11784188,
    address: "7 Banding Court",
    birth_day: "8/20/2004",
  },
  {
    full_name: "Henka Castanaga",
    status: "inactive",
    points: 59,
    gender: "Female",
    mail: "hcastanaga1@mapquest.com",
    mobile_numbers: "595 30 40 59",
    id_number: 20862704,
    address: "86592 Lakewood Crossing",
    birth_day: "1/12/2003",
  },
  {
    full_name: "Noreen Condie",
    status: "inactive",
    points: 76,
    gender: "Female",
    mail: "ncondie2@economist.com",
    mobile_numbers: "595 30 40 58",
    id_number: 44725589,
    address: "679 Northport Center",
    birth_day: "12/25/2003",
  },
  {
    full_name: "Noreen Condie",
    status: "inactive",
    points: 76,
    gender: "Female",
    mail: "ncondie2@economist.com",
    mobile_numbers: "595 30 40 58",
    id_number: 44725589,
    address: "679 Northport Center",
    birth_day: "12/25/2003",
  },
  {
    full_name: "Noreen Condie",
    status: "inactive",
    points: 76,
    gender: "Female",
    mail: "ncondie2@economist.com",
    mobile_numbers: "595 30 40 58",
    id_number: 44725589,
    address: "679 Northport Center",
    birth_day: "12/25/2003",
  },
  {
    full_name: "Noreen Condie",
    status: "inactive",
    points: 76,
    gender: "Female",
    mail: "ncondie2@economist.com",
    mobile_numbers: "595 30 40 58",
    id_number: 44725589,
    address: "679 Northport Center",
    birth_day: "12/25/2003",
  },
];

const TicTac = ({ data }) => {
  const [activeChecked, setActiveChecked] = useState(true);
  const [inactiveChecked, setInactiveChecked] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const filteredData = userDataList.filter((user) => {
    if (activeChecked && inactiveChecked) {
      return true; // Both checkboxes are checked, return all data
    } else if (activeChecked) {
      return user.status === "active";
    } else if (inactiveChecked) {
      return user.status === "inactive";
    }
    return false;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  const handleCheckboxChange = (checkbox) => {
    if (checkbox === "active") {
      setActiveChecked(!activeChecked);
    } else if (checkbox === "inactive") {
      setInactiveChecked(!inactiveChecked);
    }
    setCurrentPage(1); // Reset current page when checkbox changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const nextHandler = () => {
    setCurrentPage((prev) => {
      if (totalPages > prev) {
        return prev + 1;
      } else {
        return totalPages;
      }
    });
  };
  const prevHandler = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
  };
  const lastPageHandler = () => {
    setCurrentPage(totalPages);
  };
  const firstPageHandler = () => {
    setCurrentPage(1);
  };
  useEffect(() => {
    setCurrentPage(1); // Reset current page when data or checkboxes change
  }, []);

  return (
    <div>
      {/* Filter checkboxes */}
      <label>
        active
        <input
          type="checkbox"
          checked={activeChecked}
          onChange={() => handleCheckboxChange("active")}
        />
      </label>
      <label>
        inactive
        <input
          type="checkbox"
          checked={inactiveChecked}
          onChange={() => handleCheckboxChange("inactive")}
        />
      </label>

      {/* User data container */}
      <div>
        {displayedData.map((user, index) => (
          <div key={index}>
            {user.full_name}, Status: {user.status}, Points: {user.points}
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div>
        <div onClick={firstPageHandler}>first page</div>
        <div onClick={prevHandler}>prev</div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button key={page} onClick={() => handlePageChange(page)}>
              {page}
            </button>
          )
        )}
        <div onClick={nextHandler}>next</div>
        <div onClick={lastPageHandler}>last page</div>
      </div>
    </div>
  );
};

export default TicTac;
// data

// get unique
