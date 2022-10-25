import React, { useState, useRef } from "react";
import "../css/Contact.css";
import { DARK_GREEN, DEEP_PURPLE, USER_ID } from "../Constants";
import { BiSend } from "react-icons/bi";
import emailjs from "emailjs-com";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef<HTMLSpanElement>(null);
  const emailRef = useRef<HTMLSpanElement>(null);
  const messageRef = useRef<HTMLSpanElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [messageSuccess, setMessageSuccess] = useState("");

  const EmailClicked = () => {
    const textUnderline = document.getElementsByClassName(
      "text-underline"
    ) as HTMLCollectionOf<HTMLElement>;

    const wrapper = document.getElementById("wrapper-email");
    textUnderline[0].style.backgroundColor = DEEP_PURPLE;
    wrapper?.classList.add("clicked");

    navigator.clipboard.writeText("kacper.8leszczynski8@gmail.com");
  };

  const onFocus = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => {
    e.target.nextElementSibling?.classList.add("change-translateY");
  };

  const onBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => {
    //if value is written then dont change place of label
    if (e.target.value) return;
    e.target.nextElementSibling?.classList.remove("change-translateY");
  };

  const sendEmail = () => {
    const prop = form.current as string | HTMLFormElement;
    console.log("first");

    if (!email || !name || !message) {
      return;
    }

    emailjs.sendForm("service_uuzrhlf", "template_1sbi0vm", prop, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    console.log("second");
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const form = e.target as Element;

    sendEmail();

    //work with label
    if (!name) {
      if (nameRef.current) {
        nameRef.current!.innerHTML = "PLEASE ENTER NAME";
      }
      return;
    }
    if (!email) {
      if (emailRef.current) {
        emailRef.current!.innerHTML = "PLEASE ENTER EMAIL";
      }
      return;
    }

    if (validateEmail(email) == null) {
      if (emailRef.current) {
        emailRef.current!.innerHTML = "PLEASE ENTER CORRECT EMAIL";
      }
      return;
    }

    if (!message) {
      if (messageRef.current) {
        messageRef.current!.innerHTML = "PLEASE ENTER MESSAGE";
      }
      return;
    }
    console.log("yay");

    const submitButton = document.getElementsByClassName(
      "icon-send"
    ) as HTMLCollectionOf<HTMLElement>;
    // submitButton[0].style.color = DARK_GREEN;
    setMessageSuccess("Message sent!");
    setEmail("");
    setName("");
    setMessage("");

    nameRef.current!.innerHTML = "NAME";
    emailRef.current!.innerHTML = "EMAIL";
    messageRef.current!.innerHTML = "MESSAGE";

    //put back labels to place
    nameRef.current!.parentElement!.classList.remove("change-translateY");
    emailRef.current!.parentElement!.classList.remove("change-translateY");
    messageRef.current!.parentElement!.classList.remove("change-translateY");

    console.log(nameRef.current!.classList);
  };

  return (
    <div className="contact-part" id="contact">
      <h1 className="contact-tags">{"<contact>"}</h1>
      <div className="contact-container">
        <div className="headline">
          <h1>Feel free to contact me on&nbsp;</h1>
          <div className="wrapper" id="wrapper-email">
            <h1 onClick={EmailClicked}>kacper.8leszczynski8@gmail.com</h1>
            <div className="text-underline"></div>
          </div>
          <br />
          <br />
          <h1>Alternatively you can write here!</h1>
          <form
            ref={form}
            className="message-form"
            autoComplete="off"
            onSubmit={(e) => handleForm(e)}
          >
            <div>
              <input
                type="text"
                className="input-field"
                autoComplete="new-password"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => onFocus(e)}
                onBlur={(e) => onBlur(e)}
                name="name"
              />
              <label htmlFor="" className="input-label">
                <span className="label-name" ref={nameRef}>
                  NAME
                </span>
              </label>
            </div>
            <div>
              <input
                type="text"
                className="input-field"
                autoComplete="new-password"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => onFocus(e)}
                onBlur={(e) => onBlur(e)}
                name="email"
              />
              <label htmlFor="" className="input-label">
                <span className="label-name" ref={emailRef}>
                  EMAIL
                </span>
              </label>
            </div>
            <div>
              <textarea
                className="input-field"
                autoComplete="new-password"
                placeholder=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={(e) => onFocus(e)}
                onBlur={(e) => onBlur(e)}
                name="message"
              />
              <label htmlFor="" className="input-label">
                <span className="label-name" ref={messageRef}>
                  MESSAGE
                </span>
              </label>
            </div>
            <br />
            <br />
            <label>
              <input type="submit" />
              <BiSend size="60px" className="icon-send" />
            </label>
          </form>
          <h1 className="message-sent-notifications">{messageSuccess}</h1>
        </div>
      </div>
      <h1 className="contact-tags">{"</contact>"}</h1>
    </div>
  );
};

export default Contact;
