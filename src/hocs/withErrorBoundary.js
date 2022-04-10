import React, { Component } from 'react'
import { Typography } from '@mui/material'

/**
 * Basic ErrorBoundary HOC typically used to wrap pages or complex data-driven components
 * to isolate errors and allow the user to continue navigating the rest of the app.
 *
 * https://reactjs.org/docs/error-boundaries.html
 *
 * NOTE: This component should be copied into your app for now as we seem to be getting
 * strange babel errors when trying to import it from the @improbable/mui library.
 */
export const withErrorBoundary = () => (WrappedComponent) =>
    class extends Component {
        constructor(props) {
            super(props)
            this.state = { error: null, errorInfo: null }
        }

        componentDidCatch = (error, errorInfo) => {
            // catch errors in any components below and re-render with error message
            this.setState({
                error: error,
                errorInfo: errorInfo,
            })
            console.error(error, errorInfo)
        }

        render() {
            if (this.state.errorInfo) {
                return (
                    <div>
                        <Typography variant="body1" color="error">
                            Something went wrong.
                        </Typography>
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            <div
                                style={{
                                    overflowY: 'auto',
                                    maxHeight: '500px',
                                }}
                            >
                                {this.state.errorInfo.componentStack}
                            </div>
                        </details>
                    </div>
                )
            }

            return <WrappedComponent {...this.props} />
        }
    }

export default withErrorBoundary
