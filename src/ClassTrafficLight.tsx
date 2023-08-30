import { Component } from 'react';

interface ClassTrafficLightState {
  currentColor: string;
}

export class ClassTrafficLight extends Component<object, ClassTrafficLightState> {
  colors: string[] = ['red', 'green', 'yellow'];

  constructor(props: object) {
    super(props);
    this.state = {
      currentColor: 'red'
    };
  }

  handleNextState = () => {
    const { currentColor } = this.state;
    const nextColorIndex = (this.colors.indexOf(currentColor) + 1) % this.colors.length;
    const nextColor = this.colors[nextColorIndex];
    this.setState({ currentColor: nextColor });
  };

  render() {
    const { currentColor } = this.state;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle red ${currentColor === 'red' ? 'active' : ''}`} style={{ backgroundColor: currentColor === 'red' ? 'red' : 'black' }}></div>
          <div className={`circle yellow ${currentColor === 'yellow' ? 'active' : ''}`} style={{ backgroundColor: currentColor === 'yellow' ? 'yellow' : 'black' }}></div>
          <div className={`circle green ${currentColor === 'green' ? 'active' : ''}`} style={{ backgroundColor: currentColor === 'green' ? 'green' : 'black' }}></div>
        </div>
        <button className="next-state-button" onClick={this.handleNextState}>Next State</button>
      </div>
    );
  }
}
