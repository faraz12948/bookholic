import React from 'react';
import Product from '../../AddProduct/Product/Product';
import Products from '../../AddProduct/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FeaturedContent from '../FeaturedContent/FeaturedContent';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Contact></Contact>
            <FeaturedContent></FeaturedContent>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;