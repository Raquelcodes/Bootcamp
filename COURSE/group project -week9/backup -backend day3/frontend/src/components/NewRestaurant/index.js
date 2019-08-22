import React, {Component} from 'react';
import Header from '../Header/index';
import './index.css'

class NewRestaurant extends Component {



    render() {
        return (
            <div>
                <Header/>
                <div className="Title-New-Restaurant">
                    CREATE NEW RESTAURANT
                    <div className="line"/>
                </div>

                <div className="Form-body">
                     <div className="Form-row">
                         <div className="Input-field">
                             <p className="Section-title">Basic</p>
                             <p className="Input-name">Name</p>
                             <input className="New-Input"/>
                         </div>
                         <div className="Input-field">
                             <p className="Input-name">Category</p>
                             <select className="Select" >
                                 <option value="" disabled selected>Select a value...</option>
                                 <option value="fast-food">Fast food</option>
                                 <option value="cafe">Café</option>
                                 <option value="pizzeria">Pizzeria</option>
                             </select>
                         </div>
                         <div className="Input-field">
                             <p className="Input-name">Country</p>
                             <select className="Select" >
                                 <option value="" disabled selected>Select a value...</option>
                                 <option value="switzerland">Switzerland</option>
                                 <option value="germany">Germany</option>
                                 <option value="italy">Italy</option>
                             </select>
                         </div>
                    </div>

                    <div className="Form-row">
                         <div className="Input-field">
                             <p className="Section-title">Adress</p>
                             <p className="Input-name">Street</p>
                             <input className="New-Input"/>
                         </div>
                        <div className="Input-field">
                             <p className="Input-name">City</p>
                             <input className="New-Input"/>
                         </div>
                        <div className="Input-field">
                             <p className="Input-name">Zip</p>
                             <input className="New-Input"/>
                         </div>
                    </div>

                    <div className="Form-row">
                         <div className="Input-field">
                             <p className="Section-title">Contact</p>
                             <p className="Input-name">Website</p>
                             <input className="New-Input"/>
                         </div>
                        <div className="Input-field">
                             <p className="Input-name">Phone</p>
                             <input className="New-Input"/>
                         </div>
                        <div className="Input-field">
                             <p className="Input-name">Email</p>
                             <input className="New-Input"/>
                         </div>
                    </div>

                    <div className="Form-row">
                         <div className="Input-field">
                             <p className="Section-title">Details</p>
                             <p className="Input-name">Opening hours</p>
                             <input className="New-Input"/>
                         </div>
                        <div className="Input-field">
                             <p className="Input-name">Price level</p>
                             <select className="Select" >
                                 <option value="" disabled selected>Select a value...</option>
                                 <option value="low">Low</option>
                                 <option value="middle">Middle</option>
                                 <option value="High">Hight</option>
                             </select>
                         </div>
                          <div className="Input-field">
                              <p className="Input-name">Image</p>
                              <button className="image-button">
                                  CHOOSE A FILE...
                              </button>
                         </div>
                    </div>

                    <div className="Form-row">
                           <button className="create-button">Create</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default NewRestaurant;