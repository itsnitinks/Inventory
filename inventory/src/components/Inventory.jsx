import { useState } from "react";
import "../components/Inventory.css";
export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 1,
    notebooks: 33,
    pens: 4
  });
  const total = inv.books + inv.notebooks + inv.pens;
  // console.log("total",total)
  const incbooks = (value) => {
    setInv({
      ...inv,
      books: inv.books + value
    });
  };
  const decbooks = (value) => {
    setInv({
      ...inv,
      books: inv.books + value
    });
  };

  // other wayofwriting
  function incpens(value) {
    setInv({
      books: inv.books,
      notebooks: inv.notebooks,
      pens: inv.pens + value
    });
  }
  function decpens(value) {
    setInv({
      books: inv.books,
      notebooks: inv.notebooks,
      pens: inv.pens + value
    });
  }
  function incnb(value) {
    setInv({
      books: inv.books,
      notebooks: inv.notebooks + value,
      pens: inv.pens
    });
  }
  function decnb(value) {
    setInv({
      books: inv.books,
      notebooks: inv.notebooks + value,
      pens: inv.pens
    });
  }

  // Create add and remove functions here that changes the
  // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px"
      }}
    >
      <div className="items">
        <div className="head">
          <span>Books: </span>
        </div>
        <div>
          <button
            className="circlularButton"
            onClick={() => {
              incbooks(1);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="circlularButton"
            onClick={() => {
              if (inv.books > 0) {
                decbooks(-1);
              }
            }}
          >
            -
          </button>
        </div>
        <span className="display">{inv.books}</span>
      </div>
      <div className="items">
        <div className="head">
          <span>Notebooks: </span>
        </div>
        <div>
          <button
            className="circlularButton"
            onClick={() => {
              incnb(1);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="circlularButton"
            onClick={() => {
              decnb(-1);
            }}
          >
            -
          </button>
        </div>

        <span className="display">{inv.notebooks}</span>
      </div>
      <div className="items">
        <div className="head">
          <span>Pen: </span>
        </div>
        <div>
          <button
            className="circlularButton"
            onClick={() => {
              incpens(1);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="circlularButton"
            onClick={() => {
              if (inv.pens > 0) {
                decpens(-1);
              }
            }}
          >
            -
          </button>
        </div>
        <span className="display">{inv.pens}</span>
      </div>
      {/* <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div> */}
      {/*calculate total and show it*/}
      {/* {total>0 ? <div className="total">TOTAL: <span className="totalvalue"> {total}</span></div>:<h4>hi</h4>} */}
      <div className="total">
        TOTAL: <span className="totalvalue"> {total}</span>
      </div>
    </div>
  );
};
