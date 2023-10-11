import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  border-radius: 8px;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
/**
 * 
 *

input  {
  font-size:14px;
  padding:10px 10px 10px 5px;
  width:300px;
  border:none;
  height: 44px;
  color: #696158;
  padding-right: 15px;
  padding-left: 15px; 
  border-radius: 8px;
  &:focus {
    outline:none;
  }
}


label                {
  font-size:14px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:15px;
  top:13px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
  background-color: white;
  padding-right: 0.3em;
  padding-left: 0.3em;
  display: flex;
  justify-content: center;
}

input:focus ~ label, input:valid ~ label  {
  top:-7px;
  font-size:12px;
  font-weight: 600;
}

::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    position: absolute;
    right: 0;
}

input:required {
    box-shadow:none;
}*/
