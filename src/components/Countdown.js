import React, { useEffect, useState } from "react";

class CountDown extends React.Component {
  state = {
    count: 10,
  };

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

const HookCountdown = (props) => {
  const [count, setCount] = useState(10);
  const [timer, setTimer] = useState(10);
  const handleOnchange = (event) => {
    setTimer(event.target.value);
  };
  useEffect(() => {
    if (count === 0) {
      // props.onTimesup();
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <div>
      {count}
      <br />
      {count === 0 && (
        <>
          <div>
            <input
              type="number"
              value={timer}
              onChange={(event) => handleOnchange(event)}
            />
          </div>
          <button
            onClick={() => {
              setCount(timer);
              setTimer(10);
            }}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export { CountDown, HookCountdown };
