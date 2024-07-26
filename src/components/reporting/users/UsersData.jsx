import React from 'react'


import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"


const UsersData = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="sm:col-span-1">
                <CardHeader className="pb-3">
                    <CardTitle>Total Registered Users</CardTitle>
                    <CardTitle className="text-4xl">1,329</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Supplier </CardDescription>
                    <CardTitle className="text-4xl">329</CardTitle>
                    <div className='flex items-center relative top-2'>
                        <CardDescription className="font-semibold ">Pending  <span className='text-md ml-5'>329</span>
                        </CardDescription>
                        <CardDescription className="font-semibold ">Rejected  <span className='text-red-500 text-md ml-5'>329</span>
                        </CardDescription>
                        <CardDescription className="font-semibold">Approved  <span className='text-green-500 text-md ml-5'>320</span>
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Business Account</CardDescription>
                    <CardTitle className="text-4xl">329</CardTitle>
                    <div className='flex items-center relative top-2'>
                        <CardDescription className="font-semibold ">Pending  <span className='text-md ml-5'>329</span>
                        </CardDescription>
                        <CardDescription className="font-semibold ">Rejected  <span className='text-red-500 text-md ml-5'>329</span>
                        </CardDescription>
                        <CardDescription className="font-semibold">Approved  <span className='text-green-500 text-md ml-5'>320</span>
                        </CardDescription>
                    </div>
                </CardHeader>

            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Personal account </CardDescription>
                    <CardTitle className="text-4xl">329</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>
        </div>

    )
}

export default UsersData
