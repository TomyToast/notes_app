import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

class MarkDownElement extends Component {

    render() {
        return (
            <Markdown options={{ forceBlock: true }}>
                {this.props.mdValue}
            </Markdown>
        )
    }
}
export default MarkDownElement;