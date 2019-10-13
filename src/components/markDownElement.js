import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import CreatedAt from './cretedAt';

class MarkDownElement extends Component {

    render() {
        return (
            <div className="MarkDownElement">
                <div className="MarkDownText">
                    <Markdown className="MarkDownParagraph" options={{ forceBlock: true }}>
                        {this.props.mdValue}
                    </Markdown>
                </div>
                <CreatedAt timeOfCreation={this.props.timeOfCreation} status={this.props.status} />
            </div>
        )
    }
}
export default MarkDownElement;