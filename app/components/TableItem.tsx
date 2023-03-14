import { Form } from "@remix-run/react"


export default function TableItem({data}:any){
    // const fetcher = useFetcher();
    // const deleteHandler = () => {
    //     const proceed = confirm('are you sure?')
    //     if(!proceed){
    //         return;
    //     }
    //     fetcher.submit(null, {method : 'delete', action : `/expenses/${id}`});
    // }
    const dataItem = data
    return(
        <div className="">
            <div className="relative overflow-x-auto">
                <div>
                    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                            <th scope="col" className="px-6 py-3">Product name</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataItem.map((item:any)=>(
                                    <tr key={item.id} className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">{item.title}</th>
                                        <td className="px-6 py-4">{item.category}</td>
                                        <td className="px-6 py-4">{item.price}$</td>
                                        <td className="px-6 py-4">
                                            <menu>
                                                <Form method="delete" action={`/expenses/${item.id}`}>
                                                    Edit ||
                                                    <button>Delete</button>  
                                                    || Detail
                                                </Form>
                                            </menu>
                                        </td>
                                    </tr>    
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}