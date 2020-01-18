import React, {Component} from 'react';

class LIstProducts extends Component {
    render() {
        return (
            <div>
                <p>{this.props.item.id}</p>
                <p>{this.props.item.id}</p>
                <p>${this.props.item.id}</p>
            </div>
        );
    }
}

export default Item;