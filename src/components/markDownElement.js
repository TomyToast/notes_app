import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import CreatedAt from './cretedAt';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

class MarkDownElement extends Component {

    render() {
        return (
            <div className="bg-dark my-2 rounded">
                <Toast>
                    <ToastBody>
                        <Markdown className="MarkDownParagraph" options={{ forceBlock: true }}>
                            {this.props.mdValue}
                        </Markdown>
                    </ToastBody>
                    <ToastHeader >
                        <CreatedAt timeOfCreation={this.props.timeOfCreation} status={this.props.status} />
                    </ToastHeader>
                </Toast>
            </div >
        )
    }
}
export default MarkDownElement;