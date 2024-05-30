import { SwitchComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';

function App() {
  let switchRef: SwitchComponent;
  function changeState(): void {
    switchRef.toggle();
  }
  return (
    <div className="App">
      <label>Bluetooth Tethering</label>
      <div>
        <SwitchComponent checked={true} ref={(scope)=>{switchRef=scope as SwitchComponent}}
        onLabel='ON' offLabel='OFF' cssClass='e-small'
        disabled={true}
        ></SwitchComponent>
        <ButtonComponent onClick={changeState}
        cssClass='e-small'>Change State</ButtonComponent>
      </div>
    </div>
  );
}

export default App;
