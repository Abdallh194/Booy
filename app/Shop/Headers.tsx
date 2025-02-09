import { bookCategories } from "@/public/Data";
import { Button } from "@mui/material";

import React, { memo } from "react";
import { Form, FormControl } from "react-bootstrap";

declare type THeaderProps = {
  setselectedcat: (value: string) => void;
  selectedCat: string;
};
const Headers = ({ setselectedcat, selectedCat }: THeaderProps) => {
  return (
    <div className="headers d-flex justify-content-between">
      <div className="head">تسوق الكتب الان</div>
      <div className="searchBox">
        <FormControl type="text" placeholder="بتدور على كتاب معين .....؟" />
        <Button className="btn">Search</Button>
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
