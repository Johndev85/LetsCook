import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/assets/font/flaticon.scss';

import Layout from '../components/Layout';

import Logo from '../styles/assets/images/Logo.png';

import Mastercard from '../styles/assets/icons/mastercard.svg';
import Visa from '../styles/assets/icons/visa.svg';
import Paypal from '../styles/assets/icons/paypal.svg';

export default function Payments() {
  //   const [card, setCard] = useState('');

  handleClick = () => {
    console.log('Clicked');
  };

  return (
    <Layout>
      <main className='main_payments'>
        <div className='card'>
          <nav className='nav_mobile'>
            <ul>
              <Link to='/recipe-details'>
                <span className='flaticon-left-arrow'></span>
              </Link>
              <Link to='/'>
                <img className='logo_payment' src={Logo} alt='Logo LetsCook' />
              </Link>
            </ul>
          </nav>

          {/* <OldMethod /> */}
          <section className='old_methods'>
            <h3 className='title_method'>Payment Methods</h3>
            <div className='methods'>
              <ul>
                <Link to='/' to='/' className='method'>
                  <input type='radio' id='visa' name='card' value='visa' />
                  <img src={Visa} alt='' />
                  <p>****</p>
                  <p>5634</p>
                  <p>11/25</p>
                </Link>
                <Link to='/' className='method'>
                  <input
                    type='radio'
                    id='mastercard'
                    name='card'
                    value='mastercard'
                  />
                  <img src={Mastercard} alt='' />
                  <p>****</p>
                  <p>3152</p>
                  <p>03/21</p>
                </Link>
                <Link to='/' className='method'>
                  <input type='radio' id='paypal' name='card' value='paypal' />
                  <img className='paypal' src={Paypal} alt='' />
                </Link>
                <Link to='/' className='method'>
                  <input type='radio' id='paypal' name='card' value='paypal' />
                  <img className='paypal' src={Paypal} alt='' />
                </Link>
                <Link to='/' className='method'>
                  <input type='radio' id='paypal' name='card' value='paypal' />
                  <img className='paypal' src={Paypal} alt='' />
                </Link>
              </ul>
            </div>
          </section>
          {/* _____________________________ */}
          {/* <NewMethod /> */}
          <form className='new_method'>
            <div className='method_header'>
              <h3 className='title_method '>Add Payment Methods</h3>
              <select name='type_card button' id=''>
                <option to='/'>Credit Card</option>
                <option to='%'>Debit Card</option>
              </select>
            </div>
            <label>Card Number</label>
            <input
              //   onChange={this.handleChange}
              className='new_card'
              type='text'
              placeholder='4152 1254 1254 6548'
              name='idCard'
              //   value={this.state.idCard}
            />
            <div className='security_form'>
              <label>Valid Thru</label>
              <label>CVV</label>
              <input
                // onChange={this.handleChange}
                type='text'
                placeholder='15/23'
                name='validThru'
                // value={this.state.validThru}
              />
              <div className='secyrity_from--view'>
                <input
                  //   onChange={this.handleChange}
                  type='text'
                  placeholder='***'
                  name='cvv'
                  //   value={this.state.cvv}
                />
                <Link to='/'>
                  <span className='flaticon-visibility'></span>
                </Link>
                {/* <Link to='/' href=''>
              <span className='flaticon-invisible'></span>
            </Link> */}
              </div>
            </div>
            <Link
              // onChange={this.handleClick}
              to='/'
              type='button'
              onClick={handleClick}
              className='add_card'
            >
              Add Method
            </Link>
          </form>

          <Link className='button' to='/order-confirmation'>
            Continue
          </Link>
        </div>
      </main>
    </Layout>
  );
}

// function OldMethod() {
//   return (
//     <section className='old_methods'>
//       <h3 className='title_method'>Payment Methods</h3>
//       <div className='methods'>
//         <ul>
//           <Link to='/' to='/' className='method'>
//             <input type='radio' id='visa' name='card' value='visa' />
//             <img src={Visa} alt='' />
//             <p>****</p>
//             <p>5634</p>
//             <p>11/25</p>
//           </Link>
//           <Link to='/' className='method'>
//             <input
//               type='radio'
//               id='mastercard'
//               name='card'
//               value='mastercard'
//             />
//             <img src={Mastercard} alt='' />
//             <p>****</p>
//             <p>3152</p>
//             <p>03/21</p>
//           </Link>
//           <Link to='/' className='method'>
//             <input type='radio' id='paypal' name='card' value='paypal' />
//             <img className='paypal' src={Paypal} alt='' />
//           </Link>
//           <Link to='/' className='method'>
//             <input type='radio' id='paypal' name='card' value='paypal' />
//             <img className='paypal' src={Paypal} alt='' />
//           </Link>
//           <Link to='/' className='method'>
//             <input type='radio' id='paypal' name='card' value='paypal' />
//             <img className='paypal' src={Paypal} alt='' />
//           </Link>
//         </ul>
//       </div>
//     </section>
//   );
// }

// function NewMethod() {
//   return (
//     <React.Fragment>
//       <form className='new_method'>
//         <div className='method_header'>
//           <h3 className='title_method '>Add Payment Methods</h3>
//           <select name='type_card button' id=''>
//             <option to='/'>Credit Card</option>
//             <option to='%'>Debit Card</option>
//           </select>
//         </div>
//         <label>Card Number</label>
//         <input
//           //   onChange={this.handleChange}
//           className='new_card'
//           type='text'
//           placeholder='4152 1254 1254 6548'
//           name='idCard'
//           //   value={this.state.idCard}
//         />
//         <div className='security_form'>
//           <label>Valid Thru</label>
//           <label>CVV</label>
//           <input
//             // onChange={this.handleChange}
//             type='text'
//             placeholder='15/23'
//             name='validThru'
//             // value={this.state.validThru}
//           />
//           <div className='secyrity_from--view'>
//             <input
//               //   onChange={this.handleChange}
//               type='text'
//               placeholder='***'
//               name='cvv'
//               //   value={this.state.cvv}
//             />
//             <Link to='/'>
//               <span className='flaticon-visibility'></span>
//             </Link>
//             {/* <Link to='/' href=''>
//               <span className='flaticon-invisible'></span>
//             </Link> */}
//           </div>
//         </div>
//         <Link to='/' type='button' onClick={handleClick} className='add_card'>
//           Add Method
//         </Link>
//       </form>
//     </React.Fragment>
//   );
// }
