
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./style.css"

const navLinks = [
    {name: "Register", href: "/register"},
{name: "Login", href: "/login"},
{name: "Forgot Password", href: "/forgot-password"},
]

  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathName = usePathname()
    return (
      <>

          <header >
            <h1>Auth Layout component</h1>
            {
              
                navLinks.map((item)=>{
                    const isActive = pathName.startsWith(item.name)
                    console.log("pa",pathName)
                    console.log("is",isActive)
                    return  <Link href={item.href} key={item.name} 
                    className={isActive ? "font-bold mr-4": " text-blue-500 mr-4 "}
                    >{item.name}</Link>
                })
            }
          </header>
          {children}
          <footer>
            <h1>Auth Layout component</h1>
          </footer>
 </>
    )
  }
  