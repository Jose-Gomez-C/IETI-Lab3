import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.handleOpen()}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Todo Task"}</DialogTitle>
        <DialogContent>
          <form onSubmit={props.handleSubmit} className="todo-form">
            <h3>New TODO</h3>
            <label htmlFor="text" className="right-margin">
              Description:
                    </label>

            <TextField
              multiline
              variant="outlined"
              id="text"
              onChange={props.handleTextChange}
              value={props.state.text}>
            </TextField>

            <br />
            <br />
            <label htmlFor="status" className="right-margin">
              Status:
                    </label>

            <Select
              autoFocus
              value={props.state.status}
              onChange={props.handleStatusChange}
              inputProps={{
                name: 'Status',
                id: 'max-width',
              }}
            >
              <MenuItem value="Ready">ready</MenuItem>
              <MenuItem value="In progress">in progress</MenuItem>
              <MenuItem value="Done">done</MenuItem>
            </Select>
            <br />
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="due-date"
                  label="Todo Date"
                  value={props.state.dueDate}
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <label htmlFor="responsible" className="right-margin">
              Responsible:
                    </label>

            <TextField
              id="responsible"
              onChange={props.handleRespChange}
              value={props.state.responsible}>
            </TextField>

            <br />
          </form>
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.handleOpen()} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleSubmit} color="primary">
            Add #{props.state.items.length + 1}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}