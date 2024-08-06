import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { fetchSalesReport } from "@/store/reportSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LatestTransactions() {
    const dispatch = useDispatch();
    const { salesReport, loading, error } = useSelector((state) => state.report);

    useEffect(() => {
        dispatch(fetchSalesReport());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!salesReport) {
        return <div className='text-center h-screen'>No data available</div>;
    }
    const {
        completed_orders_list_from_business,
    } = salesReport?.specific_time_report;
    return (
        <Card className="w-[21em]  mx-auto">
            <CardHeader>
                <CardTitle>Recent Sales </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                {completed_orders_list_from_business?.map((order, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Order ID: {order.order_id}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Date: {order.order_date}
                            </p>
                        </div>
                        <div className="ml-auto font-medium">{order.total_amount}</div>
                    </div>
                ))}
            </CardContent>
        </Card>

    )
}
