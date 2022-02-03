import React, {useRef} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    ChakraProvider,
    Checkbox,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useToast,
  } from '@chakra-ui/react';
  import { Col, Container, Form, Navbar } from "react-bootstrap";
  import { auth } from "../../../firebaseSetup";
  import Toast from '../../ToastMessages/Toast';
  import {Link} from "react-router-dom";
  //import 'C:/FYP/adaler-frontend/src/components/LandingPage/Modals/SignInModal.min.css'
  import './SignInModal.min.css';
  import './SignInModal';
  import './SignOut';
  import { ClassNames } from '@emotion/react';
  import SignUpModal from './SignUpModal';
  import { useNavigate } from "react-router-dom"
  
export default function SignInModal() {
  const navigate = useNavigate()
  

   const successToast = useToast({
    title: 'Logged In',
    description: "Waiting for developers to build redirect pages",
    status: 'success',
    duration: 5000,
    isClosable: true,
    position: "top-right",
  })
  const errorToast = useToast({
    title: 'Invalid Login',
    description: "Please enter a valid login",
    status: 'error',
    duration: 5000,
    isClosable: true,
    position: "top-right",
  })
  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      
      successToast();
      navigate('/SignOut');
    } catch (error) {
      console.error(error);
      errorToast();
    }
  };
    const { 
        isOpen: isOpenReportModal, 
        onOpen: onOpenReportModal, 
        onClose: onCloseReportModal 
    } = useDisclosure();

  return (
    <ModalContent className='ModalContent2' >
              <ModalHeader className='ModalHeader2'> Sign In </ModalHeader>
              <ModalCloseButton/>
              <ModalBody className='ModalBody2'>
              <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className='Forms2' ref={emailRef} type="email" placeholder="Enter Email" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className='Forms2' ref={passwordRef} type="password" placeholder="Enter Password" />
              <br></br>
                <Checkbox className='Checkbox2'>Remember me</Checkbox>
              </Form.Group>
              <br></br>
              <Button className='Button2' mr={160} onClick={()=>{
                signIn()
                //toast();
                }}>
                Sign In </Button>
              </ModalBody>
              <br></br>
              <ModalFooter className='ModalFooter2'>
              </ModalFooter>
              <Link  to="SignUpModal" className='Link2' onClick={()=>{
              
              }}>New User? Sign Up Here 
               </Link>
               <br></br>
    </ModalContent>  
  )
}
