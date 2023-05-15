"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BotonesTabsSecciones({path,children,link}) {
    const pathname=usePathname()
console.log(pathname , link)

  return (
<li className="flex-1">
          <Link
            className={ pathname==='/'+link
                ? " relative block p-4 border-b-2 duration-200 border-blue-500/70"
                : "block p-4 "
            }
            href={link}
          >
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {path}
              </svg>

              <span className="text-sm font-medium text-gray-900">
                {" "}
              {  children}{" "}
              </span>
            </div>
          </Link>
        </li>
  )
}
