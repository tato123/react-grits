import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Preview = styled.div`
    background: #bbdefb;    
    opacity: 0.7;
    height: inherit;
    width: inherit;
    transition: opacity 350ms ease-out;

    &:hover {
        opacity: 1.0
    }
`;

const ErrorBox = styled.div`
    background-color: #FFF0F0;
    height: 100%;
    width: 100%;
    padding: 10px 20px;
    color:#FC333D;
`

export default class Layout extends React.PureComponent {

    static propTypes = {
        debug: PropTypes.debug,
        component: PropTypes.node,
        render: PropTypes.func
    }

    static defaultProps = {
        debug: false,
        render: null
    }

    static contextTypes = {
        debug: PropTypes.bool
    }

    static childContextTypes = {
        debug: PropTypes.bool
    }

    getChildContext() {
        return { debug: this.props.debug };
    }

    getChildComponents = () => {
        const {children, debug} = this.props;
        if (debug) {
            const a = React.Children.map(children, (element, idx) => (
                <Preview idx={idx}>
                    <element.type {...element.props} />
                </Preview>
            ));
            return a;
        }
        return children
    }

    invalidLength = (maxChildren, childLength) => (
        <ErrorBox>
        <pre>
            <code>Invalid layout provided</code>
            
        </pre>
        <pre>
        <code>
                {`Expected only ${maxChildren} child components but received ${childLength}`}
            </code>
        </pre>
    </ErrorBox>
    )

    render() {
        const { children, component,render, ...rest } = this.props;
        const element = render ? render() : React.createElement(component);

        const childComponents = this.getChildComponents();
        const maxChildren = (element.type.options && element.type.options.maxChildren) || -1;
        const minChildren = (element.type.options && element.type.options.minChildren) || -1;
        if ( maxChildren >= 0  && childComponents.length > maxChildren) {
            return (this.invalidLength(maxChildren, childComponents.length))
        } 
        
        return (
            <element.type {...element.props}>
                 {childComponents}
            </element.type>               
        )
    }
}