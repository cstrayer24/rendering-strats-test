import Link from "next/link";
import React, { createRef, useRef } from "react";
import { useStyleRegistry } from "styled-jsx";

export default function Page2() {
  const opt = createRef() as any;

  return (
    <div>
      <Link href="/">go back to page1</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(opt.current.value);
        }}
      >
        <select name="cars" id="cars" ref={opt}>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
}
