import Header from "@/components/Header/Header";
import "./globals.css";
import StatusBar from "@/components/StatusBar/StatusBar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "@/reduxjs/store"


export const metadata = {
  title: "Karlancer Project",
  description: "Tozihat Site",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" dir="rtl">
      <body className="bg-five font-IranSansX">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            {children}
            <StatusBar />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
