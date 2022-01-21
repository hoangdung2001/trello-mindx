import React from "react";
import "./AppBar.scss";
import {
  Container as BootstrapContainer,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// import travailLogo from '../../resources/images/logo....'
import { useNavigate } from "react-router-dom";
function AppBar() {
  const history = useNavigate();
  return (
    <nav className="navbar-app">
      <BootstrapContainer className="travail-app-container">
        <Row>
          <Col sm={5} xs={12} className="col-no-padding">
            <div className="app-actions">
              <div className="item all">
                <i className="fa fa-th" />
              </div>
              <div
                className="item home"
                onClick={() => history("/", { replace: true })}
              >
                <i className="fa fa-home" />
              </div>
              <div className="item boards">
                <i className="fa fa-columns" />
                &nbsp;&nbsp;<strong>Boards</strong>
              </div>
              <div className="item search">
                <InputGroup className="group-search">
                  <FormControl
                    className="input-search"
                    placeholder="Jump to..."
                  />
                  <InputGroup.Text className="input-icon-search">
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </Col>
          <Col sm={2} xs={12} className="col-no-padding">
            <div className="app-branding text-center">
              {/* <a href='' target='blank'>
                                <img src={travailLogo} className='top-logo' alt='travail-logo' />
                                <span className='travail-slogan'>Travail</span>

                            </a> */}
            </div>
          </Col>
          <Col sm={5} xs={12} className="col-no-padding">
            <div className="user-actions">
              <div className="item quick">
                <i className="fa fa-plus-square-o" />
              </div>
              <div className="item news">
                <i className="fa fa-info-circle" />
              </div>
              <div className="item notification">
                <i className="fa fa-bell-o" />
                &nbsp;&nbsp;<strong>Boards</strong>
              </div>
              <div className="item user-avatar">
                <img src="" alt="travail-logo" title="Travail" />
              </div>
            </div>
          </Col>
        </Row>
      </BootstrapContainer>
    </nav>
  );
}

export default AppBar;
