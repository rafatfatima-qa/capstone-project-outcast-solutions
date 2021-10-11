import React from 'react';
import Container from "react-bootstrap/Container";
const ShippingPolicy = () => {
    return (
        <Container>
            <h3 style={{ color: "#3C3B6E" }} class="display-4"> <  br/> S H I P P I N G - P O L I C Y </h3>
            <p className="mb5 aboutus-page-text">We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.</p>
​
            <p className="mb5 aboutus-page-text">When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.
               Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.</p>
​
          
        </Container>
    )
}
export default ShippingPolicy;