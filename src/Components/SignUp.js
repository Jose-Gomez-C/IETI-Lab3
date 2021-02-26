import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {email:"", password:"",username:"",confirmPassword:""};
    }

    
    handleChangeEmail = (e) => {
        this.setState({
            email : e.target.value
        });
    }

    handleChangePasswd = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    handleConfirm = (e) => {
        this.setState({
            confirmPassword : e.target.value
        })
    }

    handleChangeUserName = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    handleSend = () =>{
        if(this.state.password !== this.state.confirmPassword){
            alert("Passwords don't match")
        } else {
            const users = JSON.parse(localStorage.getItem("users"));
            users.push({username:this.state.name,email:this.state.email,password:this.state.password})
            localStorage.setItem("users",JSON.stringify(users));
            localStorage.setItem("IsLoggedIn",true);
            localStorage.setItem("username",this.state.name);
            localStorage.setItem("email",this.state.email);
            this.props.history.push("/todo");
        }
    }
    render(){
        
        if(localStorage.getItem("users")==null){
            localStorage.setItem("users",JSON.stringify([{"username":"chan","email":"chan@mail.com","password":"chan123"}]));
        }
        return(
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography variant="h2">Sign Up</Typography>
                    
                        <div>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Full name</InputLabel>
                                <Input
                                    name="name"
                                    id = "name"
                                    onChange={this.handleChangeUserName}
                                    autoComplete="username"
                                    required
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                required
                                id="email" 
                                name="email" 
                                autoComplete="email" 
                                onChange={this.handleChangeEmail}
                                autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    required
                                    name="password"
                                    id="password"
                                    type="password"
                                    onChange={this.handleChangePasswd}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
                                <Input
                                    required
                                    name="cpassword"
                                    id="cpassword"
                                    type="password"
                                    onChange ={this.handleConfirm}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            
                            <Button onClick = {() => this.handleSend()}
                                type = "submit"
                                fullWidth
                                variant="raised"
                                color="primary">
                                Sign Up
                            </Button>
                        
                        </div>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}