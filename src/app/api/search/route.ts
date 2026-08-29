import { NextRequest, NextResponse } from "next/server";
import { search } from "@/lib/search";

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";
  const results = search(query);
  return NextResponse.json({ query, count: results.length, results });
}
