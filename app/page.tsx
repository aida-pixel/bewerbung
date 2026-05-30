import { redirect } from "next/navigation"

export default function Page() {
  // The application is a self-contained single HTML page served from /public.
  redirect("/motivationsschreiben.html")
}
