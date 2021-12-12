import React from "react";

import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const Form = () => {
    const classes = useStyles();
    return (
        <div className="form">
            <div className="form-header d-flex justify-content-center align-items-center">
                <span className="fs-3 fw-bolder text-light">
                    CONTACT ME
                </span>
            </div>
            <div className="form-body">
                <form className="form-field d-flex justify-content-center position-absolute bottom-0 ">
                    <div className="form-field-1 d-flex justify-content-center ">
                        <ValidationTextField
                            className={classes.margin}
                            label="Name"
                            required
                            variant="outlined"
                            placeholder="Your name"
                            id="validation-outlined-input"
                        />

                        <ValidationTextField
                            className={classes.margin}
                            label="Email"
                            required
                            type={"email"}
                            variant="outlined"
                            placeholder="Your email"
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className="form-field-2">
                        <TextareaAutosize
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="Drop your thoughts/queries here!"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;