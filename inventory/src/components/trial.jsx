import { useState } from "react";

function Trial() {
  const [check, setCheck] = useState({
    books: 1,
    pen: 5
  });
  // console.log("setcheck",setCheck);
  function inc(value) {
    setCheck({
      books: check.books + value,
      pen: check.pen
    });
  }
  return (
    <>
      <h3>countertrial</h3>
      <div>{check.books}</div>

      <button
        onClick={() => {
          inc(1);
        }}
      >
        increase books
      </button>
      <div>{check.pen}</div>
      <button>increase pens</button>
    </>
  );
}

export { Trial };
