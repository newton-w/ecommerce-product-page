import '../App.css';
import React, {useState} from 'react';
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";


const Overlay =()=>{
    const [overlay, setOverlay] = useState('')

    const Onchange1 = () => {
        setProducts(product1);
    }
    const Onchange2 = () => {
        setProducts(product2);
    }
    const Onchange3 = () => {
        setProducts(product3);
    }
    const Onchange4 = () => {
        setProducts(product4);
    }

    const overlayHandler = () => {
        setOverlay(prevOverlay => prevOverlay == 'active' ? '' : 'active');
    }
    return(
        <div className={`product-showcase-overlay ${overlay}`}>
                <div className="product">
                    <div className="close-popup">
                        <img src={close} alt="" />
                    </div>

                    <div className="image" onClick={overlayHandler}>
                        <img src={vproducts} alt="" />
                    </div>
                    <div className="swipe">
                        <div className="left">
                            <img src={prev} alt="" />
                        </div>
                        <div className="right">
                            <img src={next} alt="" />
                        </div>
                    </div>
                </div>
                <div className="preview">
                    <img src={thumbnail1} alt="" onClick={Onchange1} />
                    <img src={thumbnail2} alt="" onClick={Onchange2} />
                    <img src={thumbnail3} alt="" onClick={Onchange3} />
                    <img src={thumbnail4} alt="" onClick={Onchange4} />
                </div>
            </div>
    )
}
export default Overlay;