import React, { Component, PropTypes } from 'react';



// env
const inBrowser = typeof window !== 'undefined';
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE9 = UA && UA.indexOf('msie 9.0') > 0;

const Dialog = props => {

    const className = `rodal-dialog rodal-${props.animation}-${props.animationType}`;
    const CloseButton = props.showCloseButton ? <span className="rodal-close" onClick={props.onClose} /> : null;
    const { width, height, measure, duration, customStyles } = props;
    const style = {
        width                   : width + measure,
        height                  : height + measure,
        animationDuration       : duration + 'ms',
        WebkitAnimationDuration : duration + 'ms'
    };

    const mergedStyles = Object.assign(style, customStyles)

    return (
        <div style={mergedStyles} className={className}>
            {CloseButton}
            {props.children}
        </div>
    )
};

class Rodal extends Component {
    static propTypes = {
        width            : PropTypes.number,
        height           : PropTypes.number,
        measure          : PropTypes.string,
        visible          : PropTypes.bool,
        showMask         : PropTypes.bool,
        showCloseButton  : PropTypes.bool,
        animation        : PropTypes.string,
        duration         : PropTypes.number,
        className        : PropTypes.string,
        customStyles     : PropTypes.object,
        customMaskStyles : PropTypes.object,
        onClose          : PropTypes.func.isRequired
    };

    static defaultProps = {
        width            : 400,
        height           : 240,
        measure          : 'px',
        visible          : false,
        showMask         : true,
        showCloseButton  : true,
        animation        : 'zoom',
        duration         : 300,
        className        : '',
        customStyles     : {},
        customMaskStyles : {},
    };

    constructor(props) {
        super(props);

        this.handleanimationEnd = this.handleanimationEnd.bind(this);
        this.state = {
            isShow: false,
            animationType: 'leave'
        };
    }

    componentDidMount() {
        if (this.props.visible) {
            this._enter();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible) {
            this._enter();
        } else if (this.props.visible && !nextProps.visible) {
            this._leave();
        }
    }

    _enter() {
        this.setState({
            isShow: true,
            animationType: '_enter'
        });
    }

    _leave() {
        const state = isIE9 
            ? { isShow: false } 
            : { animationType: 'leave' }
        this.setState(state);
    }

    handleanimationEnd() {
        if (this.state.animationType === 'leave') {
            this.setState({ isShow: false });
        }
    }

    render() {
        const { props, state } = this;
        const mask = props.showMask ? <div className="rodal-mask" style={props.customMaskStyles} onClick={props.onClose} /> : null;
        const style = {
            display                 : state.isShow ? '' : 'none',
            WebkitAnimationDuration : props.duration + 'ms',
            animationDuration       : props.duration + 'ms'
        };

        return (
            <div style={style} 
                 className={"rodal rodal-fade-" + state.animationType + ' ' + props.className} 
                 onAnimationEnd={this.handleanimationEnd}
            >
                {mask}
                <Dialog {...props} animationType={state.animationType}>
                    {props.children}
                </Dialog>
            </div>
        )
    }
}

export default Rodal;