import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const varified = req.cookies.get("appSession");
  let url = req.url;

  console.log(url);

  if (!varified && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (varified && url == "http://localhost:3000/login") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }
}
