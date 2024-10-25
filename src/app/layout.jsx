import Header from "@/components/Header/Header";
import "./globals.css";
import StatusBar from "@/components/StatusBar/StatusBar";
import { Provider } from "react-redux";
import { store } from "@/reduxjs/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const metadata = {
  title: "Karlancer Project",
  description: "Tozihat Site",
};

export default function RootLayout({ children }) {

  const persistor = persistStore(store)

  return (
    <html lang="en" dir="rtl">
      <body className="bg-five font-IranSansX">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            {children}
            <StatusBar />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
