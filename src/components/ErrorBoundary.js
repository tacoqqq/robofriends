import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            error: false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            error: true
        })
    }

    render(){
        if (this.state.error){
            return (
            <div>
                <h1>Oops! Something went wrong.</h1>
                <p>Please refresh the page and try again.</p>
            </div>
        )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;