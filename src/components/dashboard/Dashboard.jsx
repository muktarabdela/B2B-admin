import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductReport, fetchSalesReport, fetchUsersReport } from '@/store/reportSlice';
import LatestTransactions from './LatestTransactions';
import LatestCustomers from './LatestCustomers';
import DashCards from '../DashCards';
import SalesChart from './SalesChart';
import NewProducts from './NewProducts';
import Orders from './Orders';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { productReport, salesReport, usersReport } = useSelector((state) => state.report);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductReport());
    dispatch(fetchSalesReport());
    dispatch(fetchUsersReport());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <DashCards
          icon={
            <div className="bg-clip-border mx-auto rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg grid h-16 w-16 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6 text-white"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </div>
          }
          h1text="Total Sales"
          number="53k ETB"
          highNumberText="+20%"
          highNumber={20}
          highText="than last week"
        />

        <DashCards
          icon={
            <div className="bg-clip-border mx-auto rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg grid h-16 w-16 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6 text-white"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>
            </div>
          }
          h1text="Total products added"
          number={products.length}
          highNumberText="+30%"
          highNumber={30}
          highText="than last month"
        />

        <DashCards
          icon={
            <div className="bg-clip-border mx-auto rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg grid h-16 w-16 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6 text-white"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>
            </div>
          }
          h1text="Total users registered"
          number={
            usersReport?.specific_time_report?.supplier_user_registered?.number_of_register +
            usersReport?.specific_time_report?.buyer_user_registered?.number_of_register +
            usersReport?.specific_time_report?.personal_user_registered?.number_of_register
          }
          highNumberText="+3%"
          highNumber={3}
          highText="than last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-md rounded-lg mb-6">
            <NewProducts />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6 h-full">
            <LatestTransactions SalesReport={salesReport} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <SalesChart />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <Orders />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6 h-full">
            <LatestCustomers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;