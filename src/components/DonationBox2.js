import React from 'react'
import '../css/donationbox2.css'

const DonationBox2 = () => (
<div class="parent">
  <div class="son">
    <div class="containerd">
      <div class="left">
      <div class="img"></div>
      <div class="info">
        <ul>
          <li>you are about to</li>
          <li>Donate name with</li>
          <li>$500</li>
        </ul>
        <ul>
          <li>time left</li>
          <li>25 days</li>
          <li>budget to collect</li>
          <li>$24000</li>
        </ul>
      </div>
        <div class="circle1">
          <div class="circle">
            <span>founded</span>
            <span>49,8%</span>
          </div>
        </div>
    </div>
    <div class="right">
      <div class="up">
        <ul>
          <li><h3>It's almost done!</h3></li>
          <li>Fill in the fields below and click "Donate Now!" to make something beautiful.</li>
        </ul>
        <ul>
          <li class="activecr">credit card</li>
          <li>paypal</li>
        </ul>
      </div>
      <div class="down">
         <div class="payment">
        <form>
          
          <div class="form-group">
                <label class="cardNumber">Card Number</label>
                <input type="number" class="form-control1">
                </input>
            
            
            <div class="form-group1" id="expiration-date">
              
                <label>Expiration Date</label>
                <select>
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select class="year">
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                </select>
              </div>
                
              <div class="form-group CVV">
                <label for="cvv">CVV</label>
                <input type="number" class="form-control" id="cvv">
                </input>
              </div>
            <div class="form-group btn" id="pay-now">
                <button type="submit" class="btn btn-default" id="confirm-purchase">Donate Now!</button>
            </div>
            </div>
        </form>
      
    </div>
  </div>
    </div>
  </div>
</div>
</div>

)

export default DonationBox2