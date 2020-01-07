import React, { Component } from 'react';
import $ from 'jquery'; 
import './index.css';

export default class ScrollingComponent extends Component {
  
    VerticalScroll = (direction) => {
      let far = $( '.item-container-vertical' ).height()/2*direction;
      let pos = $('.item-container-vertical').scrollTop() + far;
      $('.item-container-vertical').animate( { scrollTop: pos }, 1000)
    }

    HorizontalScroll = (direction) => {
        let far = $( '.item-container-horizontal' ).width()/2*direction;
        let pos = $('.item-container-horizontal').scrollLeft() + far;
        $('.item-container-horizontal').animate( { scrollLeft: pos }, 1000)
    }

    render(){
        const { direction, items, prevIcon, nextIcon } = this.props;
        const doScroll = direction === 'vertical' ? this.VerticalScroll : this.HorizontalScroll;

        return (
        <div className="main">
          <div className="wrapper">
            <label className="prev" onClick={() => doScroll(-1)}>
                { prevIcon || 'prev' }
            </label>
                <div className={`item-container-${direction}`}>
                {
                    items.map(item => 
                        <div className={`item-${direction}`}>
                            { item }
                        </div>
                    )
                }
                </div>
            <label className="next" onClick={() => doScroll(1)}>
                { nextIcon || 'next' }
            </label>
          </div>
        </div>)
    }
}