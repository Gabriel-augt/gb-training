import { ReactNode } from "react";

export default function ItemNavBar ({ children }: { children: ReactNode }) {
    return <li className="cursor-pointer hover:text-purple-800 hover:scale-110 hover:border-b transition tracking-wider">{ children }</li>
}