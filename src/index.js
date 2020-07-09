import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const firstName = "thành";
// const lastName = "trịnh tiến";
// const element = <div>Xin chào anh {firstName} {lastName}</div>

const Product = {
    'name' : 'oto',
    'image' : "https://3.bp.blogspot.com/-2797eLu4JIA/W4kbExwhJZI/AAAAAAAAMkM/Ljy7sEkKLPQlNcx9ZyhHCvrG_9Pgx94nwCKgBGAs/s1600/Tiger-22.jpg",
    'price' : 1000,
    'status' : true
};
const element = <div className="card" style={{width: '18rem'}}>
    <img className="card-img-top" src={Product.image} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{Product.name}</h5>
        <h5 className="card-title">{Product.price}</h5>
        <h5 className="card-title">{Product.status ? 'còn hàng' : 'hết hàng'}</h5>

        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
ReactDOM.render(
    element,

    // React.createElement("div" , null,
    //     React.createElement("h1" , null , "Trịnh Tiến Thành"),
    //     React.createElement("ul" , { className: 'menu'},
    //         React.createElement("li",null,"menu1"),
    //         React.createElement("li",null,"menu2")
    //     )
    // ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
