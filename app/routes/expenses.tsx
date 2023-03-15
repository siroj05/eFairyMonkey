import { json } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import AddForm from "~/components/addForm";
import TableItem from "~/components/TableItem";
import NavigationHeader from "~/components/navigation/navigationHeader";
import { getDataItem } from "~/data/expense.server";

export default function ExpensesApp() {
  const data = useLoaderData();
  // console.log(data)
  return (
    <>
      <NavigationHeader/>
      <main 
        className="container mx-auto px-10 mt-28"
      >
        <div className="flex justify-between my-5">
        <div>
                <Link to={'addItem'}>
                    <button className=" bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm px-4 py-2">Add item</button>
                </Link>
            </div>
            <div>
              <div className="relative flex">
                  <input type="text" id="small-input" placeholder="Search..." className="block w-80 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  <button type="submit" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </div>
        </div>
          <Outlet/>
          <TableItem data={data}/>  
      </main>
    </>
  );
}

export async function loader(){
  const dataItem = await getDataItem()
  return dataItem;
}


