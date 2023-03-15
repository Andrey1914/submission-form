import styled from "styled-components";

export const FormTitle = styled.h1`
  font-family: "Abril Fatface";
  font-size: 2.3rem;
`;

export const FormContainer = styled.div`
  width: calc(100% - 30px);
  margin: 0 auto;

  @media all and (min-width: 768px) {
    width: 400px;
  }

  @media all and (min-width: 1280px) {
    width: 500px;
  }
`;

export const FormSubmission = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormSpan = styled.span`
  font-size: 0.8rem;
`;

export const FormInput = styled.input`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid rgba(77, 181, 255, 0.4);
  resize: none;
  color: #fff;

  font-family: "Montserrat";
  font-size: 1rem;
`;

export const FormTextarea = styled.textarea`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid rgba(77, 181, 255, 0.4);
  resize: none;
  color: #fff;

  font-family: "Montserrat";
  font-size: 1rem;
`;

export const Button = styled.button`
  width: max-content;
  display: inline-block;
  color: #4db5ff;
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid #4db5ff;
  transition: all 400ms ease;
  background-color: #4db5ff;
  color: #fff;
  margin: 0 auto;

  font-family: "Montserrat";
  font-size: 1rem;

  :hover {
    background-color: #e7761b;
    color: #fff;
    border-color: transparent;
  }
`;
