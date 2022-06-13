const { use } = require("express/lib/application");

const socket = io();

const userList = document.querySelector(".usersList");
const inputField = document.querySelector(".inputMessage");
const messageForm = document.querySelector(".formChat");
const history = document.querySelector(".messagehistory");
const typingUser = document.querySelector(".typingUser");

let userName = "";
const newConn = (user) => {
    userName = user || 'user${Math.floor(Math.random()*3000)}';
    socket.emit('newUser', userName);
    adduserList(userName);

}
 
const adduserList = (userName) => {
    if (!!document.querySelector('.${userName}-data')) { return; }
    
    const dataUser = `
        <li class = "clearfix" >
            <div class="about ${userName}-data">
                <div class="name">${userName}</div>
                <div calss="status">
                    <i class = "fa fa-circle online"></i>Online
                </div>
            </div>
        </li>
    `;
    userList.innerHTML += dataUser;
}

newConn();


const addnewMessage = ({ user, message }) => {
    const time = new Date();
    const formatDate = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric" });



}

//socket
socket.on('newUser', (data) => {
    data.map((user) => adduserList(user));
});

socket.on('userDisconnected', (data) => {
    document.querySelector('.${userName}-data').remove();
});