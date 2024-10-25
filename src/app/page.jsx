import Footer from "@/components/Footer/Footer";
import ParentComponent from "@/components/ParentComponent/ParentComponent";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <ParentComponent>
      <div className="px-4 lg:px-40">
        <Products />
      </div>
      <Footer />
    </ParentComponent>    
  );
}
