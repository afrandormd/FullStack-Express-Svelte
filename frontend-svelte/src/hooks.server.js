import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  // Ambil cookie 'token'
  const token = event.cookies.get("token");

  // Ambil URL
  const { pathname } = event.url;

  // URL yang tidak memerlukan token (Login dan register)
  const publicPaths = ["/login", "/register"];

  // Pengecekan jika URL dimulai dengan /admin
  const isAdminPath = pathname.startsWith("/admin");

  // Jika sudah Login dan mencoba mengakses halaman login atau register, redirect ke dashboard
  if (!token && isAdminPath) {
    throw redirect(302, "/login");
  }

  // Lanjutan ke permintaan berikutnya
  return await resolve(event);
}
