import { Footer } from "@/components/footer";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <>
        {children}
        <Footer />
      </>
    </div>
  );
};

export default ProductLayout;
