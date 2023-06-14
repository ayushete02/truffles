"use client";
import { AssetData } from './constants'
import React from 'react';
import { useEffect, useState } from 'react';
import filterico from '../components/Icons/filter.svg'
import Image from 'next/image';

export async function getServerSideProps() {
  // Fetch the data from an API or any other source
  const response = await fetch('https://truffles-assignment-backend-production.up.railway.app/api/v1/getassets');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}


// const AssetTable = ({data}) => {
const AssetTable = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [data, setData] = useState(AssetData);
  const [filter, setFilter] = useState('');
  var totalPages = Math.ceil(data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  var currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    FilterAsset(value)
  };

  function FilterAsset(filter:String) {
    if (filter == 'Sent') {
      var datafilter = AssetData.filter(row => row.status == filter)
      setData(datafilter)
    }
    else if (filter == 'Accepted') {
      var datafilter = AssetData.filter(row => row.status == filter)
      setData(datafilter)
    }
    else{
      setData(AssetData)
    }
    totalPages = Math.ceil(data.length / rowsPerPage);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    setCurrentPage(1);
  }

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  function Status(status: string) {
    if (status == 'sent') {
      return (
        <span className="bg-yellow-100 text-[#B45309] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-[#B45309]">{status}</span>
      )
    }
    else if (status == 'Accepted') {
      return (
        <span className="bg-green-100 text-[#15803D] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg   border border-[#15803D]">{status}</span>
      )
    }

  }

  function PageOf() {
    if (((currentPage - 1) * 10 + 10) >= data.length) {
      return (data.length)
    }
    else {
      return (((currentPage - 1) * 10 + 10))
    }

  }
 
  return (
    <main id="content" className="flex-1 p-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 bg-white">

          <table className="w-full text-sm text-center text-gray-500 ">
            <caption className="p-5 pb-2 text-lg font-semibold [text-align-last:justify] text-gray-900 bg-white ">
              Assets &nbsp;
              <div className="dropdown inline-block relative">
                <select onChange={handleSelectChange} className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 ">

                  <option value="">Filters</option>
                  <option value="sent">Sent</option>
                  <option value="Accepted">Accepted</option>
                  <option value="">Remove</option>
                </select>
              </div>

            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Asset
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Request Status
                </th>

              </tr>
            </thead>
            <tbody>

              {currentRows.map((data, i) => (
                <tr key={i} className="bg-white border-b  hover:bg-gray-50 ">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {data.id}
                  </th>
                  <td className="px-6 py-4">
                    {data.asset}
                  </td>
                  <td className="px-6 py-4">
                    {data.amount}
                  </td>
                  <td className="px-6 py-4">
                    {Status(data.status)}
                  </td>

                </tr>
              ))}


            </tbody>
          </table>
          <nav className="flex items-center justify-between p-4">
            <span className="text-sm font-normal text-gray-500 ">Showing <span className="font-semibold text-gray-900 ">{(currentPage - 1) * 10 + 1}-{PageOf()}</span> of <span className="font-semibold text-gray-900 ">{data.length}</span></span>
            <div className='inline-flex items-center'>
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-full border m-1 border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => changePage(page)}
                    className={`px-3 py-2 border rounded-full m-0.5 border-gray-300 text-sm ${currentPage === page
                        ? 'text-white bg-[#384764]'
                        : 'text-gray-500 hover:bg-gray-50 bg-white '
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-full border m-0.5 border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                &gt;
              </button>
            </div>
          </nav>
        </div>
      </div>
    </main>
  )
}

export default AssetTable

function id(value: { id: string; asset: string; amount: string; status: string; }, index: number, array: { id: string; asset: string; amount: string; status: string; }[]): value is { id: string; asset: string; amount: string; status: string; } {
  throw new Error('Function not implemented.');
}
