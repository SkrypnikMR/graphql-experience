import React, { Component, ErrorInfo, ReactNode } from 'react';

import OopsFace from '@components/icons/OopsFace';

import './style.css';

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(err: Error): ErrorBoundaryState {
        console.error('diraved error', err);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleReload(): void {
        window.location.reload();
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-container">
                    <OopsFace />
                    <h1 className="error-message">Oops, something went wrong.</h1>
                    <button className="reload-button" onClick={() => this.handleReload()}>
                        Try to reload the page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
