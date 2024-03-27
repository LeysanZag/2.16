import {getPromise, postPromise} from "./api.js";
import {renderComments} from "./render.js";
import { normalizeComments } from "./helpers.js";


"use strict";
export let comments = [];

export function setComments(newComments) {
  comments = newComments;
}

// API 
export const fetchPromiseGet = () => {

  getPromise().then((responseData) => {
    const appComments = normalizeComments(responseData.comments)
    comments = appComments;
    renderComments({comments});
    
  }).catch((error) => {
    if (error.message === "Сервер упал") {
      alert("Сервер упал, попробуй еще раз")
    }
    if (error.message === 'Failed to fetch') {
      alert('Интернет не работает, попробуйте позже');
    }
    console.warn(error);
  })
};
fetchPromiseGet();

console.log("It works!");