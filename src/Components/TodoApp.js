import React, {Component} from 'react';
import './TodoApp.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Dialog from './Dialog';
import FilterDialog from './FilterDialog';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';



export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [{text:"Task",status:"Ready",dueDate:moment(),responsible:'jose'}], 
                            text: '', status: '', dueDate: moment(), responsible:'',isOpen:false,isOpenFilter:false,filtering:false};
        this.state.itemsFiltered = [{status:"",dueDate: moment(),responsible:""}];
        this.state.itemsShow = [];

    }

    render() {

        return (
                 
            <div className="App">
                <TodoList todoList={this.state.filtering ? this.state.itemsShow: this.state.items}/>     
                <Dialog 
                handleTextChange = {this.handleTextChange}
                handleStatusChange = {this.handleStatusChange}
                handleDateChange = {this.handleDateChange}
                handleRespChange = {this.handleRespChange}
                handleSubmit = {this.handleSubmit}
                handleOpen = {this.handleOpen}
                open = {this.state.isOpen}
                state = {this.state}> 
                </Dialog>

                <FilterDialog 
                handleStatusChange = {this.handleStatusChangeF}
                handleDateChange = {this.handleDateChangeF}
                handleRespChange = {this.handleRespChangeF}
                handleSubmit = {this.handleSubmitFilter}
                handleOpenFilter = {this.handleOpenFilter}
                handleChangeFiltering = {this.handleChangeFiltering}
                open = {this.state.isOpenFilter}
                state = {this.state}> 
                </FilterDialog>

                <Fab aria-label='Add' onClick={() => this.handleOpen()} color='primary' style = {{right: '-45%'}}>  
                    <AddIcon/>   
                </Fab>
                <Fab aria-label='Filter' onClick={() => this.handleOpenFilter()} color='primary' style = {{right: '-19%'}}>  
                    <SearchIcon/>   
                </Fab>
                <Fab aria-label='ChangeFilter' onClick={() => this.handleFiltering()} color='primary' style = {{right: '-25%'}}>  
                    <CancelRoundedIcon/>   
                </Fab>
                          
            </div>
        );
    }

    handleStatusChangeF = (e) => {

        this.state.itemsFiltered[0].status = e.target.value;
        this.setState(
            this.state
        );
    }

   handleDateChangeF = (e) => {

        console.log("Fecha");
        this.state.itemsFiltered[0].dueDate = e;
        this.setState(
            this.state
    );

    }

    handleRespChangeF = (e) =>{

        this.state.itemsFiltered[0].responsible = e.target.value;
        this.setState(
            this.state
        );
       
    }

    handleSubmitFilter = () =>{
        this.state.itemsShow = [];
    
        var itemsI = this.state.items;
        var itemsF = this.state.itemsFiltered;
        console.log(this.state.itemsFiltered[0].dueDate.toString());
        for (var i = 0 ; i < itemsI.length; i++){
            if (itemsI[i].status === itemsF[0].status ||  itemsI[i].dueDate === itemsF[0].dueDate.toString() || itemsI[i].responsible === itemsF[0].responsible){
                this.state.itemsShow.push(itemsI[i]);
            }
        }
        console.log(this.state.itemsShow)
        this.setState(this.state);
        this.handleFiltering();
        this.handleOpenFilter();

    }

    handleOpen = ()=>{
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    handleOpenFilter = () =>{
        this.setState({
            isOpenFilter : !this.state.isOpenFilter
        });
    }

    handleFiltering = () =>{
        this.setState({
            filtering : !this.state.filtering
        })
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleStatusChange = (e)=> {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange = (date) =>{
        this.setState({
            dueDate: date
        });
    }

    handleRespChange = (resp) =>{
        this.setState({
            responsible: resp.target.value
        });
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        if (!this.state.text.length || !this.state.status.length || !this.state.dueDate || !this.state.responsible.length){
            alert("Debe llenar todos los campos");
            return;}

        const newItem = {
            text: this.state.text,
            status: this.state.status,
            dueDate: this.state.dueDate,
            responsible : this.state.responsible,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            status: '',
            dueDate: null,
            responsible :''
        }));
        this.handleOpen();
    }

}