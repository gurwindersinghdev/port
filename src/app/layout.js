import "@/index.css";
import About from "./components/About";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          <About />

          {children}
        </div>
      </body>
    </html>
  );
}
