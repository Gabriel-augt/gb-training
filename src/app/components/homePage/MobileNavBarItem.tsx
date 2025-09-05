import { ReactNode } from "react";

export default function MobileNavBarItem ({ children }: { children: ReactNode }) {
    return <li className="cursor-pointer hover:text-purple-500 transition tracking-wider">{ children }</li>
}