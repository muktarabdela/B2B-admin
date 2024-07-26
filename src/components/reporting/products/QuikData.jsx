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


const QuikData = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="sm:col-span-1">
                <CardHeader className="pb-3">
                    <CardTitle>Total Products Registered</CardTitle>
                    <CardTitle className="text-4xl">1,329</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Pending products </CardDescription>
                    <CardTitle className="text-4xl">329</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Approved products </CardDescription>
                    <CardTitle className="text-4xl">329</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Rejected Products</CardDescription>
                    <CardTitle className="text-4xl">$1,329</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>
        </div>

    )
}

export default QuikData
