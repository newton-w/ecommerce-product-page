import "../App.css";
import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import profile from "../images/image-avatar.png";
import buy from "../images/image-product-1-thumbnail.jpg";
import del from "../images/icon-delete.svg";

// showase
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import minus from "../images/icon-minus.svg";
import pl from "../images/icon-plus.svg";
import close from "../images/icon-close.svg";

const Nav = () => {
  const [tog, setTog] = useState("");
  const [cat, setCat] = useState("");

  // const [catCount, setCatCount] = useState(0);
  const [catUpdate, seCatUpdate] = useState(0);

  const toggleMenu = () => {
    setTog((prevTog) => (prevTog === "active" ? "" : "active"));
  };
  const viewCart = () => {
    setCat((prevCat) => (prevCat === "active" ? "" : "active"));
  };
  const divStyle = {
    overflow: tog === "active" ? "hidden" : "visible",
  };
  const Fadeout = {
    opacity: cat === "active" ? "1" : "0",
    transition: cat === "active" ? "0.5s" : "0",
  };

  // Showcase
  const [overlay, setOverlay] = useState("");
  const [products, setProducts] = useState([
    product1,
    product2,
    product3,
    product4,
  ]);
  // const [products, setProducts] = useState(null)

  // Overlay Products Use State
  const [vproducts, setVproducts] = useState([
    product1,
    product2,
    product3,
    product4,
  ]);

  useEffect(() => {
    setProducts(product1);
    setVproducts(product1);
    CartEmpty();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    BorderHandler();
    // eslint-disable-next-line
  }, [products]);

  useEffect(() => {
    vBorderHandler();
    // eslint-disable-next-line
  }, [vproducts]);

  const [border1, setBorder1] = useState("");
  const [border2, setBorder2] = useState("");
  const [border3, setBorder3] = useState("");
  const [border4, setBorder4] = useState("");

  const [vborder1, setVborder1] = useState("");
  const [vborder2, setVborder2] = useState("");
  const [vborder3, setVborder3] = useState("");
  const [vborder4, setVborder4] = useState("");

  function BorderHandler() {
    if (products === product1) {
      setBorder1("active");
    } else {
      setBorder1("");
    }
    if (products === product2) {
      setBorder2("active");
    } else {
      setBorder2("");
    }
    if (products === product3) {
      setBorder3("active");
    } else {
      setBorder3("");
    }
    if (products === product4) {
      setBorder4("active");
    } else {
      setBorder4("");
    }
  }
  function vBorderHandler() {
    if (vproducts === product1) {
      setVborder1("active");
    } else {
      setVborder1("");
    }
    if (vproducts === product2) {
      setVborder2("active");
    } else {
      setVborder2("");
    }
    if (vproducts === product3) {
      setVborder3("active");
    } else {
      setVborder3("");
    }
    if (vproducts === product4) {
      setVborder4("active");
    } else {
      setVborder4("");
    }
  }
  const change1 = () => {
    setProducts(product1);
  };
  const change2 = () => {
    setProducts(product2);
  };
  const change3 = () => {
    setProducts(product3);
  };
  const change4 = () => {
    setProducts(product4);
  };

  // Overlay Products onclick events
  const Onchange1 = () => {
    setVproducts(product1);
  };
  const Onchange2 = () => {
    setVproducts(product2);
  };
  const Onchange3 = () => {
    setVproducts(product3);
  };
  const Onchange4 = () => {
    setVproducts(product4);
  };

  const Overlay = () => {
    setOverlay((prevOverlay) => (prevOverlay === "active" ? "" : "active"));
  };
  const difStyle = {
    opacity: overlay === "active" ? "0.4" : "1",
    transition: overlay === "active" ? "1s" : "0",
    background: overlay === "active" ? "grey" : "inherit",
  };
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function addtoCart() {
    seCatUpdate(count + catUpdate);
    setCount(0);
  }
  function clearCart() {
    seCatUpdate(0);
  }
  const [empty, setEmpty] = useState("");
  const [empty2, setEmpty2] = useState("");

  useEffect(CartEmpty);

  function CartEmpty() {
    if (catUpdate === 0) {
      setEmpty("active");
      setEmpty2("");
    } else {
      setEmpty("");
      setEmpty2("active");
    }
  }
  // Next and Prev buttons for images

  function nextSlide() {
    if (products === product1) {
      setProducts(product2);
    } else if (products === product2) {
      setProducts(product3);
    } else if (products === product3) {
      setProducts(product4);
    } else {
      setProducts(product1);
    }
  }

  function prevSlide() {
    if (products === product4) {
      setProducts(product3);
    } else if (products === product3) {
      setProducts(product2);
    } else if (products === product2) {
      setProducts(product1);
    } else {
      setProducts(product4);
    }
  }

  function nextVSlide() {
    if (vproducts === product1) {
      setVproducts(product2);
    } else if (vproducts === product2) {
      setVproducts(product3);
    } else if (vproducts === product3) {
      setVproducts(product4);
    } else {
      setVproducts(product1);
    }
  }

  function prevVSlide() {
    if (vproducts === product4) {
      setVproducts(product3);
    } else if (vproducts === product3) {
      setVproducts(product2);
    } else if (vproducts === product2) {
      setVproducts(product1);
    } else {
      setVproducts(product4);
    }
  }

  function Pay() {
    if (catUpdate > 0) {
      alert("CheckOut");
      seCatUpdate(0);
    } else {
      alert("No Items in the Cart");
    }
  }
  const [no, setNo] = useState();
  useEffect(() => {
    if (catUpdate < 1) {
      setNo("");
      setBtn('')
    } else {
      setNo("active");
      setBtn('active')
    }
  }, [catUpdate]);

  const [btn, setBtn] = useState('');
  return (
    <>
      <header>
        <div className="navigation" style={difStyle}>
          <div className="left">
            <div
              className={`toggle ${tog}`}
              onClick={toggleMenu}
              style={divStyle}
            ></div>
            <div className="logo">
              <img src={logo} alt="brand" />
            </div>
          </div>
          <div className={`menu ${tog}`}>
            <ul>
              <li>
                <a href="https://github.com/newton-w">Collections</a>{" "}
              </li>
              <li>
                <a href="https://github.com/newton-w">Men</a>
              </li>
              <li>
                <a href="https://github.com/newton-w">About</a>
              </li>
              <li>
                <a href="https://github.com/newton-w">Contact</a>
              </li>
            </ul>
          </div>
          <div className="acc">
            <div className="cart" onClick={viewCart}>
              <img src={cart} alt="cart" />
              <div className={`cart-counter ${no}`}>{catUpdate}</div>
            </div>
            <div className="prof">
              <img src={profile} alt="user" />
            </div>
          </div>
        </div>
        <span></span>
        <div className={`floating-card ${cat}`} style={Fadeout}>
          <div className="card-head">
            <h4>Cart</h4>
          </div>
          <div className="card-body">
            <p className={`empty ${empty}`}>Your cart is empty</p>
            <div className={`buy-items ${empty2}`}>
              <div className="buy-product">
                <img src={buy} alt="cart-items" />
              </div>
              <div className="calc-total">
                <p>
                  Fall Limited Edition Sneakers
                  <br />
                  $125.00 x {catUpdate} <b>${125 * catUpdate}.00</b>
                </p>
              </div>
              <div className="del" onClick={clearCart}>
                <img src={del} alt="bin" />
              </div>
            </div>
            <div className={`check-out ${btn}`} onClick={Pay}>
              Checkout
            </div>
          </div>
        </div>
      </header>
      <div className="showcase-container" style={difStyle}>
        <div className="product-showcase">
          <div className="product">
            <div className="image" onClick={Overlay}>
              <img src={products} alt="" />
            </div>
            <div className="swipe">
              <div className="left" onClick={prevSlide}>
                <img src={prev} alt="" />
              </div>
              <div className="right" onClick={nextSlide}>
                <img src={next} alt="" />
              </div>
            </div>
          </div>
          <div className="preview">
            <img
              src={thumbnail1}
              alt=""
              onClick={change1}
              className={border1}
            />
            <img
              src={thumbnail2}
              alt=""
              onClick={change2}
              className={border2}
            />
            <img
              src={thumbnail3}
              alt=""
              onClick={change3}
              className={border3}
            />
            <img
              src={thumbnail4}
              alt=""
              onClick={change4}
              className={border4}
            />
          </div>
        </div>
        <div className="product-text">
          <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            {" "}
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p className="price">
            $125.00 <span>50%</span>
            <del>$250.00</del>
          </p>

          <div className="add-to-cart">
            <div className="add">
              <div className="minus" onClick={decrement}>
                <img src={minus} alt="" />
              </div>
              <div className="no">{count}</div>
              <div className="plus" onClick={increment}>
                <img src={pl} alt="" />
              </div>
            </div>
            <div className="button" onClick={addtoCart}>
              <img src={cart} alt="" />
              Add to cart
            </div>
          </div>
        </div>
      </div>
      <div className={`product-showcase-overlay ${overlay}`}>
        <div className="product">
          <div className="close-popup" onClick={Overlay}>
            <img src={close} alt="" />
          </div>

          <div className="image">
            <img src={vproducts} alt="" />
          </div>
          <div className="swipe">
            <div className="left" onClick={prevVSlide}>
              <img src={prev} alt="" />
            </div>
            <div className="right" onClick={nextVSlide}>
              <img src={next} alt="" />
            </div>
          </div>
        </div>
        <div className="preview2">
          <img
            src={thumbnail1}
            alt=""
            onClick={Onchange1}
            className={vborder1}
          />
          <img
            src={thumbnail2}
            alt=""
            onClick={Onchange2}
            className={vborder2}
          />
          <img
            src={thumbnail3}
            alt=""
            onClick={Onchange3}
            className={vborder3}
          />
          <img
            src={thumbnail4}
            alt=""
            onClick={Onchange4}
            className={vborder4}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
