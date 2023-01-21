function App() {
    return (
        <div className="container">
            <div className="grid">
                <div className="dis"></div>
                <div className="padButton AC tomato">AC</div>
                <div className="padButton C tomato">C</div>
                <div className="padButton div">/</div>
                <div className="padButton times">x</div>
                <div className="padButton seven dark-grey">7</div>
                <div className="padButton eight dark-grey">8</div>
                <div className="padButton nine dark-grey">9</div>
                <div className="padButton minus">-</div>
                <div className="padButton four dark-grey">4</div>
                <div className="padButton five dark-grey">5</div>
                <div className="padButton six dark-grey">6</div>
                <div className="padButton plus">+</div>
                <div className="padButton one dark-grey">1</div>
                <div className="padButton two dark-grey">2</div>
                <div className="padButton three dark-grey">3</div>
                <div className="padButton equal blue">=</div>
                <div className="padButton zero dark-grey">0</div>
                <div className="padButton dot dark-grey">.</div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));