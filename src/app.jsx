import React from 'react';

const App = () => {
    const [username, setUsername] = useState();
    const [chirps, setChirps] = useState();
    const [chirpbtn, setChirpBtn] = useState();
    const [chirpArr, setChirpArr] = useState([{ username: 'Awake', message: 'Hello' }, { username: 'Sleep', message: 'Goodnigt' }]);

    const createChirp = () => {
        let obj = {
            username: username,
            message: chirps
        }
        setChirpArr()
    }

    return ( <
        >
        <
        div id = "main-container" >
        <
        div id = "main-container" >
        <
        div className = "chirp-body display-flex" >
        <
        input onChange = {
            (e) => setUsername(e.target.value) }
        className = "chirper"
        type = "email"
        placeholder = "e" / >
        <
        br > < /br> <
        textArea onChange = {
            (e) => setChirps(e.target.value) }
        className = "chirper"
        type = "textArea"
        placeholder = "How is your day" / >
        <
        br > < /br><a href="#" className="btn btn-primary" onClick={(e) => setChirpBtn(e)}>Chirp</a >
        <
        /div> <
        /div>

        <
        div className = "chirps" > {
            chirpArr.map((chirp) => {
                return ( <
                    div className = "new-chirps display-flex" >
                    //<h3>{chirp.username}</h3>
                    <
                    br > < /br><p>{chirp.message}</p >
                    <
                    /div>
                )
            })
        } <
        /div> <
        /div>

        <
        />
    );
};

export default App;