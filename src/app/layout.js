import DashboardLayout from "@/components/DashboardLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Dashboard",
  description: "Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`⁠${poppins.variable} ${poppins.className} antialiased⁠`}
      >
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: "var(--font-poppins)",
              },
            }}
          >
            <DashboardLayout>{children}</DashboardLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
