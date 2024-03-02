import React from "react";
import '../index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import navlogo from '../assets/navlogo.png';
import { FunctionComponent } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuGroup,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "../components/mode-toggle";
 

const Navbar: FunctionComponent = () => {
    return (
        <header className="bg-primary self-stretch [backdrop-filter:blur(4px)] box-border flex flex-row items-start justify-center py-[5px] px-5 gap-[0px_290px] top-[0] z-[99] sticky max-w-full text-left text-xl text-white font-subtle-medium border-b-[0.5px] border-solid border-white mq1000:gap-[0px_290px] mq725:gap-[0px_290px]">
            <div className="flex flex-row items-center justify-start gap-[0px_4px] mt-4 mr-16">
                <img
                    className="h-[30px] w-[30px] relative"
                    loading="lazy"
                    alt="navlogo"
                    src={navlogo}
                />
                <h2 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap">
                    APSIT Feedback
                </h2>
            </div>
            <div className="w-[473px] flex flex-row items-center justify-between gap-[20px] max-w-full text-lg text-darkgray mq725:hidden">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-white hover:text-gray-300 transition duration-300">
                    <Link to="/">
                        <h3 className="m-0 relative text-inherit font-semibold font-inherit">
                            Home
                        </h3>
                    </Link>
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 hover:text-gray-300 transition duration-300">
                    <Link to="/query">
                        <h3 className="m-0 relative text-inherit font-normal font-inherit">
                            Query
                        </h3>
                    </Link>
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 hover:text-gray-300 transition duration-300">
                    <Link to="/feedback">
                        <h3 className="m-0 relative text-inherit font-normal font-inherit">
                            Feedback
                        </h3>
                    </Link>
                </div>
                <button className="cursor-pointer py-1 pr-2 pl-[13px] bg-[transparent] rounded-md p-2 m-2 flex flex-row items-center justify-start gap-[13px] whitespace-nowrap border-[1px] border-solid border-gray-400 hover:bg-dimgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
                    <div className="h-8 w-[152px] relative rounded-3xs box-border hidden border-[1px] border-solid border-darkgray" />
                    <div className="relative text-lg font-subtle-medium text-darkgray text-left z-[1]">
                        Shravandeep
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage className=" rounded-full w-9 h-9 mt-1 ml-" src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 mt-5" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">shadcn</p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        shravandeepyadav592@apsit.edu.in
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-primary"/>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Notifications
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>New Team</DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator className="bg-primary" />
                            <DropdownMenuItem>
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </button>
                <div className="mr-30">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
