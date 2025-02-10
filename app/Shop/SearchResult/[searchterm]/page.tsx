"use client";
import BookLoop from "@/components/BookLoop/BookLoop";
import Breadcrumbs from "@/components/Breadcrumb";
import useShop from "@/hooks/useShop";
import { useParams } from "next/navigation";
import { Container } from "react-bootstrap";

import empty from "@/assets/LottieFiles/empty.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const SearchResultPage = () => {
  const params = useParams();
  let searchTerm = params?.searchterm;

  const { RemaingHandler, isDisabled, setisDisabled, ProductsFullInfo } =
    useShop();
  if (Array.isArray(searchTerm)) {
    searchTerm = searchTerm[0]; // خذ أول عنصر فقط
  }

  if (!searchTerm) {
    return <h1>لم يتم إدخال كلمة بحث!</h1>;
  }

  // فك ترميز النص بعد التأكد من أنه string
  const bookName = decodeURIComponent(searchTerm);
  console.log(bookName);

  // تصفية الكتب مع تجاهل حالة الأحرف
  const FoundBook = ProductsFullInfo.filter(
    (b) => `كتاب ${b.title}` == bookName
  );

  const isFound = FoundBook.length > 0;
  console.log(isFound, FoundBook);

  return (
    <Container style={{ maxWidth: "1575px" }}>
      <div className="reverse-Direction">
        <Breadcrumbs />
      </div>
      {isFound ? (
        <div>
          <h2>تم العثور على الكتاب:</h2>
          <BookLoop
            Books={FoundBook}
            loading="succeeded"
            error={null}
            RemaingHandler={RemaingHandler}
            isDisabled={isDisabled}
            setisDisabled={setisDisabled}
          />
        </div>
      ) : (
        <div className="empty-cart">
          <Lottie animationData={empty} />
          <p> لم يتم العثور علي كتاب {bookName}</p>
        </div>
      )}
    </Container>
  );
};

export default SearchResultPage;
