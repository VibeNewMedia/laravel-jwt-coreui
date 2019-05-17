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
    Form,
    Table,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

class Education extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.changeAim = this.changeAim.bind(this);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.updateTextField = this.updateTextField.bind(this);

        this.state = {
            title: "Education",
            sub_title: "",
            main_aim: "Make a new appointment",
            question_1: "What do I need help with?",
            answer_1: "",
            question_2: "What can I do about it?",
            answer_2: "",
            question_3: "Who can help me?",
            answer_3: "",
            question_4: "Notes",
            question_5: "Outcome",
            accordion: [false, false, false, false, false],
            collapse: false,
            sos_mode: false
          };
      }

    changeAim(e) {
        var target = e.currentTarget;
        console.log("target", target);
        
        // var value = target.value;
        // console.log("value", value);
    }
    
    updateTextField(e) {
        const target = e.currentTarget;
        console.log("target" , target);
		// const value = target.answer_area_1.value;
        // console.log("Val", value);
        // this.setState({
        //     answer_1: value,
        // });

        this.toggleAccordion();
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
                {this.state.sos_mode &&
                    <h3>SOS</h3>
                }
                <h4>{this.state.sub_title}</h4>

               
                <Card 
                className={
                    this.state.sos_mode ? 'border-danger' : ''
                }>
                    <CardHeader>
                        My aim is to:
                        </CardHeader> 
                    <CardBody>
                        {/* <CardTitle onClick={this.changeAim}>
                        <input  defaultValue={this.state.main_aim}/>
                        </CardTitle> */}
                        <CardTitle> {this.state.main_aim} 
                        <p>I need help:<AppSwitch  className={'mx-1'} color={'danger'} onChange={this.toggle}/></p>
                        </CardTitle>
                 
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
                            
                            <textarea rows="15" cols="20"
                            defaultValue={ this.state.answer_1 || 'This field is editable.' }
        				    name="answer_area_1"/>
                            <Button onClick={this.updateTextField}>Save and Close</Button>
                      
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
                        This field is not editable!
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
                        This field is not editable!
                       </CardBody>
                    </Collapse>
                    <CardHeader>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">
                        {this.state.question_4} 

                        {!this.state.accordion[3] &&
                            <FaCaretRight/>
                        }

                        {this.state.accordion[3] &&
                            <FaCaretDown/>
                        }
                        
                        </h5>
                      </Button>
                      </CardHeader> 
                    <Collapse isOpen={this.state.accordion[3]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                        This field is not editable!
                       </CardBody>
                    </Collapse>
                    <CardHeader>
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(4)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">
                        {this.state.question_5} 

                        {!this.state.accordion[4] &&
                            <FaCaretRight/>
                        }

                        {this.state.accordion[4] &&
                            <FaCaretDown/>
                        }
                        
                        </h5>
                      </Button>
                      </CardHeader> 
                    <Collapse isOpen={this.state.accordion[4]} data-parent="#accordion" id="collapseThree">
                        <CardBody>
                            This field is not editable!
                        </CardBody>
                    </Collapse>
                  
                </div>
            
                </CardBody>
                </Card> 
            </div>
        );
    }
   
}


export default Education;