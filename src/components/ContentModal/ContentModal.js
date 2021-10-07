import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import "./ContentModal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({ children, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    setContent(data);
  };

  useEffect(() => {
    fetchData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && content.origin && content.location && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img
                  src={content.image}
                  alt={content.name}
                  className="ContentModal__portrait"
                />

                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.species} (
                    {(
                      content.created ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.gender && (
                    <i className="tagline">{content.gender}</i>
                  )}

                  <span className="ContentModal__description">
                   status: {content.status} <br />
                   Origin: {content.origin.name} <br />
                   Location: {content.location.name}   <br />

                   </span>

                        <Button>
                            <Link exact to={`/character/${id}`}>
                                details
                            </Link>
                        </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
