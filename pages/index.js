/*********************************************************************************
 *  WEB422 – Assignment 3
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Yongda Long Student ID: 172800211 Date: Jun 16, 2023
 *
 *
 ********************************************************************************/

import useSWR from "swr";
import { useState, useEffect } from "react";
import { Pagination, Table } from "react-bootstrap";
import PageHeader from "@/component/PageHeader";
import { useRouter } from "next/router";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const router = useRouter();

  const { data, error } = useSWR(
    `https://yongdalong.cyclic.app/api/trips?page=${page}&perPage=10`
  );

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) setPage(page - 1);
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <>
      <PageHeader
        title="Trips List"
        text="Full list of Citibike Trips"
        showSubscriber={true}
        showCustomer={true}
      />
      <Table bordered hover>
        <thead>
          <tr>
            <th>Bike ID</th>
            <th>Start Station</th>
            <th>End Station</th>
            <th>Duration (Minutes)</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((trip) => (
            <tr key={trip._id} onClick={() => router.push(`/trip/${trip._id}`)}>
              <td className={trip.usertype}>{trip.bikeid}</td>
              <td className={trip.usertype}>{trip["start station name"]}</td>
              <td className={trip.usertype}>{trip["end station name"]}</td>
              <td className={trip.usertype}>
                {(trip.tripduration / 60).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
