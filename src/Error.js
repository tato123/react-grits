import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ErrorContainer = styled.div`
    background: red;
    color: white;
    width: 100%;
    height: 100%;    
    padding: 20px;
`;

export default class ErrorBox extends React.Component {
    static propTypes = {
        error: PropTypes.any
    }

    static defaultProps = {
        error: null
    }

    render () {
        const {error} = this.props;
        return (
            <ErrorContainer>
                <pre>
                    <code>
                {error.stack}
                </code>
                </pre>
            </ErrorContainer>
        )
    }
}