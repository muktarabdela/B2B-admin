import React from 'react'


import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"


const QuikData = ({ productReport }) => {
    // Calculate the counts based on productReport
    console.log(productReport)
    const totalProducts = productReport.length;
    const pendingProducts = productReport.filter(product => product.status === 'pending').length;
    const approvedProducts = productReport.filter(product => product.status === 'approve').length;
    const rejectedProducts = productReport.filter(product => product.status === 'rejected').length; return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="sm:col-span-1">
                <CardHeader className="pb-3">
                    <CardDescription className="font-semibold text-md">
                        Total Products Registered
                    </CardDescription>
                    <CardTitle className="text-4xl">{totalProducts}</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Pending products </CardDescription>
                    <CardTitle className="text-4xl">{pendingProducts}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Approved products </CardDescription>
                    <CardTitle className="text-4xl">{approvedProducts}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Rejected Products</CardDescription>
                    <CardTitle className="text-4xl">{rejectedProducts}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>
        </div>

    )
}

export default QuikData
