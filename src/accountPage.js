import { useState } from "react";

const [email,setEmail]= useState('');
const [password, setPassword]= useState('');
const [name,setName]= useState('');
function validateForm(){
    return email.length>0 && password.length>0 && name.length>0;
}

const accountPage = () =>{
    return(
            <div className="Login">
              <Form onSubmit={handleSubmit}>
                <Stack gap={3}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      autoFocus
                      size="lg"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      size="lg"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button size="lg" type="submit" disabled={!validateForm()}>
                    Login
                  </Button>
                </Stack>
              </Form>
            </div>
        
    )
        
    

}
export default accountPage;