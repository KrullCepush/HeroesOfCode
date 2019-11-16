import React from "react";

class ShopComponent extends React.Component {
  render() {
    return (
      <div className="shop-component-wrap">
        <div className="shop-header-wrap">
          <div className="shop-header-player-avatar">
            <img
              src={this.props.payloadPlayer.avatar}
              alt="avatar"
              className="shop-header-player-avatar__img"
            />
          </div>
          <div className="shop-header-player-wrap">
            <div className="shop-header-player_name">
              {this.props.payloadPlayer.name}
            </div>
            <div className="shop-header-player_gold">
              <img
                src="/img/stats/coins.png"
                alt="coins"
                className="shop-header-player_gold-img"
              />
              <span>{this.props.payloadPlayer.gold}</span>
            </div>
          </div>
        </div>
        <div className="shop-main-wrap">
          <div className="shop-main-await">
            The content is currently unavailable
          </div>
          {/* Заглушка, позже убрать */}
        </div>
      </div>
    );
  }
}

export default ShopComponent;
