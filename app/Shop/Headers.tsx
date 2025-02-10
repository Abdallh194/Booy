import { bookCategories } from "@/public/Data";
import { Button } from "@mui/joy";
import { useRouter } from "next/navigation";
import React, { memo, useRef } from "react";
import { Form, FormControl } from "react-bootstrap";

declare type THeaderProps = {
  setselectedcat: (value: string) => void;
  selectedCat: string;
};

const Headers = ({ setselectedcat, selectedCat }: THeaderProps) => {
  const termref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = () => {
    const searchterm = termref.current?.value?.trim();
    if (!searchterm) return;
    const encodedTerm = encodeURIComponent(searchterm);
    router.push(`/Shop/SearchResult/${encodedTerm}`);
  };
  return (
    <div className="headers d-flex justify-content-between">
      <div className="head">تسوق الكتب الان</div>
      <div className="searchBox">
        <FormControl
          type="text"
          placeholder="بتدور على كتاب معين .....؟"
          ref={termref}
        />
        <Button className="btn" onClick={handleSearch}>
          بحث
        </Button>
      </div>
      <div className="fillter">
        <h4>الفئات</h4>
        <Form.Select
          aria-label="Default select example"
          className="selectCategories"
          value={selectedCat}
          onChange={(e) => setselectedcat(e.target.value)}
        >
          {bookCategories.map((category, index) => (
            <option key={index} value={category}>
              {category === "All" ? "كل الكتب" : category}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
};

export default memo(Headers);
