import React from 'react'
import Preview1From from './components/preview1'
import PreviewFrom from './components/preview'
import StatisticFrom from './components/statistic'
import RegisterFrom from './components/Register'
import LoginFrom from './components/signin'

function App() {
  return (
    <div class='Register'>
            <div>
                <h1 class='Name'>Cardiac center</h1>
                <form>
                    <h2 class='managment'>MANAGEMENT</h2>
                    <h3 class='main1'>OVERVIEW</h3>
                    <br/>
                    <h4 class='manu1'><a href={<StatisticFrom/>}>STATISTIC</a></h4>
                    <br/>
                    <h5 class='manu2'><a href={<RegisterFrom/>}>REGISTER</a></h5>
                    <br/>
                    <h6 class='main2'>PRESRIPTION</h6>
                    <br/>
                    <h7 class='manu3'>ORDER</h7>
                    <br/>
                    <h8 class='manu4'>REVIEW</h8>
                </form>
                    <div class='status'>     
                </div>
            </div>
          <div class='Register1'>
            <h1 class='Registerp'></h1>
          </div> 
      </div>
  );
}
export default App;
