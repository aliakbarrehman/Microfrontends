import React from 'react';

class MicroFrontendWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>Failed to load Microfrontend</p>;
    }

    return this.props.children; 
  }
}

export default MicroFrontendWrapper;