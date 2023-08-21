
import {useState} from 'react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <div className='relative h-screen w-1/5'>
        <div className={`${isSidebarOpen ? "bg-gradient-to-b from-indigo-700 to-blue-700 opacity-75 inset-0 text-white w-1/5 p-4 fixed h-screen top-0" : "w-1/12 z-0"} transition-all ease-in-out duration-300`}>
          <h1 className="text-3xl font-semibold mb-6 mt-4" >Dashboard</h1>
          <ul className="space-y-2">
            <li className="hover:bg-indigo-900 p-3 rounded cursor-pointer">
              Home
            </li>
            <li className="hover:bg-indigo-900 p-3 rounded cursor-pointer">
              Analytics
            </li>
            <li className="hover:bg-indigo-900 p-3 rounded cursor-pointer">
              Reports
            </li>
            <li className="hover:bg-indigo-900 p-3 rounded cursor-pointer">
              logout
            </li>
          </ul>
        </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 transition-all ease-in-out duration-300">
          <h2 className="text-3xl font-semibold mb-8">Hello, welcome!</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Total Sales</h3>
              <p className="text-gray-600 text-lg">$10,245</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-3">New Customers</h3>
              <p className="text-gray-600 text-lg">152</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg col-span-2">
              <h3 className="text-xl font-semibold mb-3">Latest Orders</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Order #12345</span>
                  <span className="text-gray-600">12 min ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Order #12346</span>
                  <span className="text-gray-600">25 min ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Order #12347</span>
                  <span className="text-gray-600">42 min ago</span>
                </li>
              </ul>
            </div>
            {/* Add more data cards here */}
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <ul className="space-y-4">
                <li>
                  <span className="text-gray-600">Aug 18</span> - Updated product prices.
                </li>
                <li>
                  <span className="text-gray-600">Aug 15</span> - Launched new marketing campaign.
                </li>
                <li>
                  <span className="text-gray-600">Aug 12</span> - Resolved server issues.
                </li>
                {/* Add more activity items */}
              </ul>
            </div>
          </div>
          {/* Other dashboard components */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
