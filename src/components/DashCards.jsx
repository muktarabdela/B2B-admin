import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
const DashCards = ({ icon, h1text, number, highNumber, highText }) => {
    return (
        <Card>
            <CardHeader className="pb-2">
                <CardDescription>This Week {h1text}</CardDescription>
                <CardTitle className="text-4xl">{number}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">{highNumber} from last week</div>
            </CardContent>
            {/* <CardFooter>
                <Progress value={highNumber} aria-label="25% increase" />
            </CardFooter> */}
        </Card>
    )
}

export default DashCards