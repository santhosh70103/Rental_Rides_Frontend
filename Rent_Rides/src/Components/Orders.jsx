const Orders=()=>
{
    return(
       
                <div className="flex flex-col items-center justify-center bg-white">
                    <header className="w-full flex items-center justify-between p-4 border-b">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold">My Orders</h1>
                        </div>
                        
                    </header>
                    <main className="w-full max-w-4xl mt-8">
                        <table className="min-w-full bg-white border rounded-lg">
                            <thead>
                                <tr className="w-full bg-gray-100">
                                    <th className="py-2 px-4 text-left">Order No</th>
                                    <th className="py-2 px-4 text-left">Car Name</th>
                                    <th className="py-2 px-4 text-left">Pickup Date</th>
                                    <th className="py-2 px-4 text-left">Expected Return Date</th>
                                    <th className="py-2 px-4 text-left">Order Status</th>
                                    <th className="py-2 px-4 text-left">Order Details</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="py-2 px-4">1</td>
                                    <td className="py-2 px-4">Car1</td>
                                    <td className="py-2 px-4">Date1</td>
                                    <td className="py-2 px-4">Date2</td>
                                    <td className="py-2 px-4">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Completed</span>
                                    </td>
                                    <td className="text-center"><button className="bg-blue-600 text-white py-1 px-2 rounded-sm">Details</button></td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 px-4">2</td>
                                    <td className="py-2 px-4">Car 2</td>
                                    <td className="py-2 px-4">Date 2</td>
                                    <td className="py-2 px-4">Date 2</td>
                                    <td className="py-2 px-4">
                                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Reserved</span>
                                    </td>
                                    <td className="text-center"><button className="bg-blue-600 text-white py-1 px-2 rounded-sm">Details</button></td>                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 px-4">3</td>
                                    <td className="py-2 px-4">Car 3</td>
                                    <td className="py-2 px-4">Date 3</td>
                                    <td className="py-2 px-4">Date 3</td>
                                    <td className="py-2 px-4">
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Cancelled</span>
                                    </td>
                                    <td className="text-center"><button className="bg-blue-600 text-white py-1 px-2 rounded-sm ">Details</button></td>                                </tr>
                            </tbody>
                        </table>
                    </main>
                    <footer className="w-full flex items-center justify-center p-4 mt-8">
                        <p className="text-sm text-gray-500">The orders Details</p>
                    </footer>
                </div>
            );
        };

    export default Orders

      