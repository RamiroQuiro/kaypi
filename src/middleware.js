import { NextResponse } from "next/server";


export function middleware(request){

  if(request.nextUrl.pathname.includes('/dashboard')){
  
}
return NextResponse.next()

}