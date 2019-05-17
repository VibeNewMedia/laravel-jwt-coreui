import React, { Component } from 'react';
import ProgressBar from '../Base/ProgressBar/ProgressBar'
import Switches from '../Base/Switches/Switches'
import Collapses from '../Base/Collapses/Collapses'
import {FaCaretRight, FaCaretDown} from "react-icons/fa";
import { AppSwitch } from '@coreui/react'
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

class Supervisor extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleAccordion = this.toggleAccordion.bind(this);

        this.state = {
            title: "Supervisor",
            sub_title: "",
            main_aim: "Make a new appointment",
            question_1: "What do I need help with?",
            answer_1: "",
            question_2: "What can I do about it?",
            answer_2: "",
            question_3: "Who can help me?",
            answer_3: "",
            accordion: [false, false, false],
            collapse: false,
            sos_mode: false
          };
      }

   
    toggle (e) {
        this.setState({
            sos_mode: !this.state.sos_mode
        });
    }   

    toggleAccordion(tab) {

        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);
    
        this.setState({
          accordion: state,
        });
      }

    render() {
        const { sos_mode, accordion } = this.state;
    
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h4>{this.state.sub_title}</h4>

               
                <Card>
                    <CardHeader>
                        My aim is to:
                        </CardHeader> 
                    <CardBody>
                        <CardTitle>{this.state.main_aim}</CardTitle>
                        
                 
                <div id="accordion">
                  
                     <CardHeader>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">
                        {this.state.question_1} 
                        {!this.state.accordion[0] &&
                            <FaCaretRight/>
                        }
                        {this.state.accordion[0] &&
                            <FaCaretDown/>
                        }
                        </h5>
                      </Button>
                      </CardHeader> 
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                          <textarea rows="20" cols="35">
                          1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      
                          </textarea>
                       </CardBody>
                    </Collapse>
                 
                    <CardHeader>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">
                        {this.state.question_2}
                        
                        {!this.state.accordion[1] &&
                            <FaCaretRight/>
                        }

                        {this.state.accordion[1] &&
                            <FaCaretDown/>
                        }

                        </h5>
                      </Button>
                    </CardHeader> 
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                        2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                    <CardHeader>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">
                        {this.state.question_3} 

                        {!this.state.accordion[2] &&
                            <FaCaretRight/>
                        }

                        {this.state.accordion[2] &&
                            <FaCaretDown/>
                        }
                        
                        </h5>
                      </Button>
                      </CardHeader> 
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                        3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </CardBody>
                    </Collapse>
                  
                </div>
            
                </CardBody>
                </Card> 
    

                <p>
                HELP:
                <AppSwitch  className={'mx-1'} color={'danger'} onChange={this.toggle}/>
                </p>

                {this.state.sos_mode &&
                <div>SOS BITACCHCH</div>
                }   
            </div>
        );
    }
   
}


export default Supervisor;