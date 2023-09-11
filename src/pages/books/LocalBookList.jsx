import React, { useEffect, useState } from "react";
import LocalBookItem from "./LocalBookItem.jsx";
import { commonGetJson } from "../../shared/utils/api-helper.js";
import Spinner from "../../shared/components/Spinner";
import { Pagination } from "@mui/material";

export default function LocalBookList() {
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function handleChange(event, value) {
    setPage(value);
    getData(value);
  }

  function getData() {
    setLoading(true);
    commonGetJson("/books?page=" + page)
      .then(x => {
        setBookList(x.data);
        setTotalPages(x.totalPages);
      })
      .catch(e => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {bookList.length > 0 ? (
            <div style={{ overflow: "auto", maxHeight: 800 }}>
              <Pagination
                page={page}
                count={totalPages}
                onChange={handleChange}
              />
              {bookList.map(x => (
                <LocalBookItem key={x.id} data={x} />
              ))}
            </div>
          ) : (
            <span>Go Google a Book!</span>
          )}
        </div>
      )}
    </div>
  );
}
