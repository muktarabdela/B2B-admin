import { Menu, X } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";


function MobileSidebar() {
    const [isOpen, setIsOpen] = useState(false); // State to control sheet visibility

    return (
        <nav className="fixed to-5 right-[2px] flex h-0px] w-full items-center px-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </SheetTrigger>

                <SheetContent className=" p-0" side="left">
                    <MobileNavbar setIsOpen={setIsOpen} />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileSidebar