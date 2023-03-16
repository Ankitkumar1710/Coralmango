import { useState } from "react";
import { Container,TextInput,Button,Stack, Group,Text} from '@mantine/core';
import Link from "next/link"; 

const Login = () => {  
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");

  const user = {
    email: "demo@coralmango.com",
    password: "demo123"
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
      if (password === user.password) {
        // Router.push('/Login')
        console.log("User Loged In");
      } else {
        alert("wrong password");
      }
    } else {
      console.log("please check you username or Email");
    }
  };
  return (
    <Container size='md' mt='10%'>
      <form onSubmit={handlesubmit}>
        <Container size='xs'>
          <Stack>
          <TextInput
            type="text"
            style={{
              fontSize:'10px',
            }}
            placeholder="Email"
            label='Email'
            required
            value={UnameOrEmail}
            onChange={(e) => setUnameOrEmail(e.target.value)}
            className="Input"
          />
          <TextInput
            type="Password"
            placeholder="Password"
            label='Password'
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="Input"
          />
        <Button type="submit">Log in</Button>
        <Text color='dimmed'>Please check login results in console</Text>
        </Stack>
        </Container>
      </form>
      <Group position="center" mt={60}>
      <Link href='./table'> 
<Button >Click me to get data in Table</Button>
</Link>
<Link href='./card'> 
<Button >Click me to get data in card</Button>
</Link>
<Link href='./array'> 
<Button >Click me to get data in ES6 Basic</Button>
</Link>
</Group>
    </Container>
  );
};
export default Login;