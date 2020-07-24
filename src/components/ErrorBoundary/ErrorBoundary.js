import React, {Component} from "react";

import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    };

    render() {
        if (this.state.hasError)
            return <h1 className={styles.errorStyle}>Something went wrong</h1>

        return this.props.children;
    }


}