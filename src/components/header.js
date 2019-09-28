import React from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'
/** import '../css/main.css' **/
import '../css/header.css'
import '../../src/components/layout.css'


const Header = () => (
  <section className="cx_top_bar">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="cx_contact">
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="cx_icon" />
              <span style={{fontWeight: 'bold'}}>Donate $5 now - text $5 to 555555</span>
            </p>
             <p><FontAwesomeIcon icon={faEnvelope} className="cx_icon" /><span>donations@globallightingproject.com</span></p>
          </div>
        </div>
      </div> 
    </div>  
  </section>
)


export default Header

