const BookingDetails=()=>
{

            const data = [
                { name: "John Doe", car: "Toyota Camry", pickup: "2023-10-01", return: "2023-10-05", status: "Paid", action: "View" },
                { name: "Jane Smith", car: "Honda Accord", pickup: "2023-10-02", return: "2023-10-06", status: "Pending", action: "Edit" },
                { name: "Michael Johnson", car: "Ford Mustang", pickup: "2023-10-03", return: "2023-10-07", status: "Paid", action: "View" },
                { name: "Emily Brown", car: "Chevrolet Malibu", pickup: "2023-10-04", return: "2023-10-08", status: "Overdue|Unpaid", action: "Pay Now" },
                { name: "David Wilson", car: "Nissan Altima", pickup: "2023-10-05", return: "2023-10-09", status: "Paid", action: "View" },
                { name: "Sarah White", car: "BMW 3 Series", pickup: "2023-10-06", return: "2023-10-10", status: "Pending", action: "Cancel" },
                { name: "Kevin Lee", car: "Audi A4", pickup: "2023-10-07", return: "2023-10-11", status: "Paid", action: "View" },
            ];

            return (
                <div class="max-w-7xl mx-auto">
                    <div class="bg-white shadow-md rounded-lg overflow-hidden">
                        <table class="min-w-full bg-white">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Customer Name</th>
                                    <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Car Name</th>
                                    <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Pickup Date</th>
                                    <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Expected Return Date</th>
                                    <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Payment Status</th>
                                    <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{item.name}</td>
                                        <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{item.car}</td>
                                        <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{item.pickup}</td>
                                        <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{item.return}</td>
                                        <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                                            {item.status.split('|').map((status, i) => (
                                                <span key={i} class={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${status === 'Paid' ? 'bg-blue-100 text-blue-800' : status === 'Pending' ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'} mr-1`}>
                                                    {status}
                                                </span>
                                            ))}
                                        </td>
                                        <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                                            <button class="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600">{item.action}</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-4 text-center text-gray-500 text-sm">
                        Made with <span class="text-blue-500">Yrsily</span>
                    </div>
                </div>
            );
        };


export default BookingDetails;
   