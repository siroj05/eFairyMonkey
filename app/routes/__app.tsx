import { Outlet } from "@remix-run/react";
import NavigationHeader from "~/components/navigation/navigationHeader";

export default function PathlessLayout(){
    return (
        <>  
            <NavigationHeader/>
            <Outlet/>
        </>
    )
}