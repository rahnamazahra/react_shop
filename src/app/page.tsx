import Banner from "@/components/banner";
import Category from "@/components/category";
import Navigation from "@/components/navigation";


export default function Home() {

  return (
    <div className="text-center">
      <Navigation />
      <Banner />
      <Category />
    </div>
  );
}
