import React, {Component} from 'react';
import ReactSwiper from 'reactjs-swiper';


export default class Test extends Component {
    render() {
        const items = [];
        this.props.slideList.map(v=>{
            items.push({
                title:v.title,
                image:v.image_url
            })
        })
        const swiperOptions = {
            preloadImages: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false
        };
        //console.log(this.props.slideList);
        return (
            <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                                    className="swiper-example"/>
        );
    }
};
