body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    background-color: rgb(144, 179, 243);
}

.board {
    display: grid;
    grid-template-columns: repeat(3,100px);
    gap: 10px;
    margin: 30px auto;
    width: 320px;
}
.cell {
    width: 100px;
    height: 100px;
    font-size:24px;
    text-align: center;
    line-height: 100px;
    background-color: black;
    cursor: pointer;
    border: 2px solid whitesmoke;
}

.cell:hover {
    background-color: lightslategray;

}

.message {
    font-size: 40px;
    margin: 30px;
}