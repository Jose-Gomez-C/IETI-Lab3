import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';





export class Login extends React.Component{

    constructor(props) {
        super(props);
        console.log("WHYYY")
        console.log(this.props);
        this.state = {email:"", password:"",IsLoggedIn: false};
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePasswd = this.handleChangePasswd.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({
            email : e.target.value
        });
    }

    handleChangePasswd(e) {
        this.setState({
            password : e.target.value
        })
    }

    handleSend() {
        if(localStorage.getItem("users")==null){
            localStorage.setItem("users",JSON.stringify([{"username":"jose","email":"jose@gmail.com","password":"Hola123"}]));
        } 
        
        (localStorage.getItem("users"));
        var listUsers = JSON.parse(localStorage.getItem("users"));
        var logged = false;
        for (var i = 0; i < listUsers.length; i++){
            if (listUsers[i].email == this.state.email && listUsers[i].password == this.state.password ){
                localStorage.setItem("IsLoggedIn",true);
                localStorage.setItem("username",listUsers[i].username);
                localStorage.setItem("email",listUsers[i].email);
                logged = true;
                
            }
        }
        if (!logged){
            alert("Incorrect User or password ")
        }else {
            window.location.href = "/todo";
        }
        
    }
    
    render(){
    
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <div>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                id="email" 
                                name="email" 
                                autoComplete="email" 
                                onChange={this.handleChangeEmail}
                                autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    id="password"
                                    type="password"
                                    onChange={this.handleChangePasswd}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <div style={{display:'flex'}}>
                                <Button onClick={this.handleSend}
                                    variant="outlined" 
                                    color="primary"
                                    type = "submit"
                                    fullWidth
                                >
                                    Sign in
                                </Button>
                                <Button
                                    variant="outlined"
                                    type ="submit"
                                    fullWidth
                                    color="primary"
                                    href = "/signup"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}