import { NextResponse, type NextRequest } from "next/server";
import { previewHostAllowed } from "./lib/preview-config";
export function proxy(request: NextRequest) {
  if (
    !previewHostAllowed(request.headers.get("host"), process.env.VERCEL_ENV)
  ) {
    return new NextResponse(
      "This development preview is unavailable on this host.",
      { status: 403, headers: { "X-Robots-Tag": "noindex, nofollow" } },
    );
  }
  return NextResponse.next();
}
