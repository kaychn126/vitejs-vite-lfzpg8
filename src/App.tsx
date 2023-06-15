import './App.css'

function App() {
  const list1 = Array.from(Array(84).keys());
  const list2 = Array.from(Array(16).keys());
  const list3 = Array.from(Array(9).keys());
  return (
    <view className="card">
      {list1.map((item1) => {
        return (<view className="block">
          {list2.map((item2) => {
            return (<view className="block1">
                {list3.map((item3) => {
                  return <view className="block2"/>
                })}
              </view>);
          })}
        </view>);
      })}
    </view>
  );
}

export default App
