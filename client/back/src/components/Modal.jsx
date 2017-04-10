import React, { Component, PropTypes } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class myModal extends Component {
    static propTypes = {
        modal: PropTypes.bool, 
        handelToggle: PropTypes.func,
        handelDelete: PropTypes.func,
    }
    
    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.handelToggle} className={this.props.className}>
                <ModalBody>
                    是否要删除这篇文章？<br/>
                    删了就没了喔！
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.props.handelDelete}>删除</Button>{' '}
                    <Button color="secondary" onClick={this.props.handelToggle}>取消</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default myModal;