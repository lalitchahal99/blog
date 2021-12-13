import React from "react";
import LocationIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Mail';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Form = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleContact = () => {
        setOpen(true);
    }

    return (
        <div className="form">
            <div className="form-header d-flex justify-content-center align-items-center">
                <span className="fs-3 fw-bolder text-light">
                    CONTACT ME
                </span>
            </div>
            <div className="form-body">
                <div className="w-100 d-flex justify-content-center align-items-center" style={{ position: 'absolute', height: '88%', overflowY: 'auto', bottom: '0' }}>

                    <section className="mb-4 mx-2 my-2 pt-4 h-100 w-100">
                        <div className="row p-1">
                            {open === true &&
                                <div className="p-2 d-flex justify-content-center">
                                    <Collapse in={open}>
                                        <Alert
                                            severity="error"
                                            action={
                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <CloseIcon fontSize="inherit" />
                                                </IconButton>
                                            }
                                        >
                                            Under Development!
                                        </Alert>
                                    </Collapse>
                                </div>
                            }
                            <div className="col-md-9 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" >

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Your name" />
                                                <label htmlFor="name" className="">Name</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="email" name="email" className="form-control" placeholder="Your email" />
                                                <label htmlFor="email" className="">Email</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" />
                                                <label htmlFor="subject" className="">Subject</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-12">

                                            <div className="md-form">
                                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder="Write your thoughts here."></textarea>
                                                <label htmlFor="message">Your message</label>
                                            </div>

                                        </div>
                                    </div>

                                </form>

                                <div className="text-center text-md-left">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<Icon />}
                                        onClick={() => { handleContact(); }}
                                    >
                                        Send
                                    </Button>
                                    <br />
                                </div>
                                <div className="status"></div>
                            </div>

                            <div className="col-md-3 text-center">
                                <ul className="list-unstyled mb-0">
                                    <li><LocationIcon />
                                        <p>Singhpur sani, U.P, IN, 244302</p>
                                    </li>

                                    <li><PhoneIcon />
                                        <p>+91 9756 86063</p>
                                    </li>

                                    <li><EmailIcon />
                                        <p>lalitchahal9@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Form;