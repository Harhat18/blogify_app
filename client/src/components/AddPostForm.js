import React from "react";
import { makeStyles } from "tss-react/mui";
import {
  Button,
  TextField,
  Select,
  Input,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
const useStyles = makeStyles()((theme) => {
  return {
    paper: {
      padding: theme.spacing(2),
    },
    textField: {
      marginBottom: theme.spacing(2),
    },
  };
});

const tags = ["fun", "programming", "health", "science"];
const postSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().one0f(tags),
});

const AddPostForm = () => {
  const { classes } = useStyles();
  return <div>AddPostForm</div>;
};

export default AddPostForm;
